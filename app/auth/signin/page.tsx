'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { AnimatedAuth } from '@/components/ui/animated-auth'

export const dynamic = 'force-dynamic'

export default function SignIn() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      if (data.user) {
        // Force a full page refresh to update middleware
        window.location.href = '/dashboard'
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred during sign in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatedAuth 
      mode="signin" 
      onSubmit={handleSignIn}
      isLoading={loading}
      error={error}
      otherPageLink="/auth/signup"
    />
  )
}
