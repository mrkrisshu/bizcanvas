'use client'

import { useRouter } from 'next/navigation'
import Hero from '@/components/ui/animated-shader-hero'
import AnimatedStars from '@/components/ui/animated-stars'
import FloatingLights from '@/components/ui/floating-lights'

export default function Home() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/auth/signup')
  }

  const handleSignIn = () => {
    router.push('/auth/signin')
  }

  return (
    <main className="min-h-screen relative bg-black">
      {/* Animated Stars Background */}
      <AnimatedStars />
      {/* Floating Lights */}
      <FloatingLights />
      
      {/* Hero Section */}
      <Hero
        trustBadge={{
          text: "Trusted by entrepreneurs and startups worldwide",
          icons: ["✨"]
        }}
        headline={{
          line1: "Build Your",
          line2: "Business Model Canvas"
        }}
        subtitle="Supercharge your business planning with AI-powered insights and interactive canvases built for the next generation of entrepreneurs — fast, intuitive, and completely free."
        buttons={{
          primary: {
            text: "Get Started for Free",
            onClick: handleGetStarted
          },
          secondary: {
            text: "Sign In",
            onClick: handleSignIn
          }
        }}
      />

      {/* Features Section */}
      <section className="py-20 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose BizCanvas?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to create, visualize, and refine your business model in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">AI-Powered</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate comprehensive business models with intelligent AI assistance that understands your industry and goals.
              </p>
            </div>

            <div className="group p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Visual Canvas</h3>
              <p className="text-gray-400 leading-relaxed">
                Interactive business model canvas that&apos;s intuitive to use, easy to understand, and simple to share with your team.
              </p>
            </div>

            <div className="group p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💾</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Save & Export</h3>
              <p className="text-gray-400 leading-relaxed">
                Automatically save your work and export your canvases in multiple formats including PDF, PNG, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black relative z-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-white">₹0</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">3 Business Model Canvases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">AI-Powered Insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Basic Export (PDF, PNG)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Auto-Save</span>
                </li>
              </ul>

              <button
                onClick={handleGetStarted}
                className="w-full px-6 py-3 bg-zinc-800 text-white font-semibold rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-all duration-300"
              >
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="p-8 bg-gradient-to-br from-primary-600/20 to-purple-600/20 rounded-2xl border-2 border-primary-500 hover:border-primary-400 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-white">₹299</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">For serious entrepreneurs</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300"><strong className="text-white">Unlimited</strong> Business Model Canvases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Advanced AI Analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">All Export Formats</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Priority Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Team Collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span className="text-gray-300">Custom Branding</span>
                </li>
              </ul>

              <button
                onClick={handleGetStarted}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative z-10 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of entrepreneurs using BizCanvas to bring their ideas to life.
          </p>
          <button
            onClick={handleGetStarted}
            className="px-10 py-4 bg-white text-black text-lg font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Start Building Now — It&apos;s Free!
          </button>
        </div>
      </section>
    </main>
  )
}
