'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { AnimatedAuth } from '@/components/ui/animated-auth'

export const dynamic = 'force-dynamic'

export default function SignUp() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleSignUp = async (email: string, password: string, name?: string) => {
    setLoading(true)
    setError('')

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name
          }
        }
      })

      if (error) throw error

      if (data.user) {
        // Force a full page refresh to update middleware
        window.location.href = '/dashboard'
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred during sign up')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatedAuth 
      mode="signup" 
      onSubmit={handleSignUp}
      isLoading={loading}
      error={error}
      otherPageLink="/auth/signin"
    />
  )
}
