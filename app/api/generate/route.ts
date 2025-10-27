import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { generateBusinessCanvas } from '@/lib/geminiClient'

export async function POST(req: NextRequest) {
  try {
    // Get the authorization header
    const authHeader = req.headers.get('authorization')
    
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized - No auth header' }, { status: 401 })
    }

    // Create Supabase client without generic type
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          headers: {
            Authorization: authHeader,
          },
        },
      }
    )

    // Check authentication
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized - Invalid token' }, { status: 401 })
    }

    const { businessIdea, industry, title } = await req.json()

    if (!businessIdea || !industry) {
      return NextResponse.json(
        { error: 'Missing required fields: businessIdea and industry' },
        { status: 400 }
      )
    }

    // Fetch user data from users table
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()

    if (userError || !userData) {
      // Create user record if doesn't exist
      const { error: insertError } = await supabase.from('users').insert({
        id: user.id,
        email: user.email!,
        subscription_status: 'free',
        generation_count: 0,
      })

      if (insertError) {
        console.error('Error creating user:', insertError)
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
      }

      // Refetch user data
      const { data: newUserData } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()

      if (!newUserData) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
      }

      // Use new user data
      const userRecord = newUserData
      
      // Check quota for free users
      if (userRecord.subscription_status === 'free' && userRecord.generation_count >= 3) {
        return NextResponse.json(
          { upgrade_required: true, message: 'Free limit (3) reached. Upgrade to Pro for unlimited canvases.' },
          { status: 403 }
        )
      }

      // Generate canvas using Gemini AI
      const canvasData = await generateBusinessCanvas(businessIdea, industry)

      // Save to canvases table
      const { data: canvas, error: canvasError } = await supabase
        .from('canvases')
        .insert({
          user_id: user.id,
          title: title || `${industry} Business Model Canvas`,
          data: canvasData as any,
        })
        .select()
        .single()

      if (canvasError) {
        console.error('Error saving canvas:', canvasError)
        return NextResponse.json({ error: 'Failed to save canvas' }, { status: 500 })
      }

      // Increment generation count
      await supabase
        .from('users')
        .update({ generation_count: userRecord.generation_count + 1 })
        .eq('id', user.id)

      return NextResponse.json({
        success: true,
        canvas,
        generation_count: userRecord.generation_count + 1,
      })
    }

    // Check quota for free users
    if (userData.subscription_status === 'free' && userData.generation_count >= 3) {
      return NextResponse.json(
        { upgrade_required: true, message: 'Free limit (3) reached. Upgrade to Pro for unlimited canvases.' },
        { status: 403 }
      )
    }

    // Generate canvas using Gemini AI
    const canvasData = await generateBusinessCanvas(businessIdea, industry)

    // Save to canvases table
    const { data: canvas, error: canvasError } = await supabase
      .from('canvases')
      .insert({
        user_id: user.id,
        title: title || `${industry} Business Model Canvas`,
        data: canvasData as any,
      })
      .select()
      .single()

    if (canvasError) {
      console.error('Error saving canvas:', canvasError)
      return NextResponse.json({ error: 'Failed to save canvas' }, { status: 500 })
    }

    // Increment generation count
    await supabase
      .from('users')
      .update({ generation_count: userData.generation_count + 1 })
      .eq('id', user.id)

    return NextResponse.json({
      success: true,
      canvas,
      generation_count: userData.generation_count + 1,
    })
  } catch (error: any) {
    console.error('Generate API Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to generate canvas' },
      { status: 500 }
    )
  }
}
