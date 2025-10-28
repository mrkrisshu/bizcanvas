'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface UpgradeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleUpgrade = async () => {
    setLoading(true)
    try {
      // Get session token
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        console.error('No session found')
        setLoading(false)
        return
      }

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('No checkout URL returned:', data)
        setLoading(false)
      }
    } catch (error) {
      console.error('Upgrade error:', error)
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl shadow-2xl p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Upgrade to Pro
          </h2>
          <p className="text-gray-400 text-sm">
            You&apos;ve reached your free limit of 3 canvases
          </p>
        </div>

        <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/20 rounded-xl p-6 mb-6">
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-5xl font-bold text-white">₹299</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unlimited Business Model Canvases
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              AI-Powered Generation with Gemini 2.5 Flash
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Export to PDF & PNG
            </li>
            <li className="flex items-center text-gray-300">
              <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Priority Support
            </li>
          </ul>
        </div>

        <Button
          onClick={handleUpgrade}
          disabled={loading}
          className="w-full h-12 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all"
        >
          {loading ? 'Processing...' : 'Upgrade Now'}
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Secure payment powered by Stripe
        </p>
      </div>
    </div>
  )
}
