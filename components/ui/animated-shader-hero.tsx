'use client'

import React from 'react'

interface HeroProps {
  trustBadge?: {
    text: string
    icons?: string[]
  }
  headline: {
    line1: string
    line2: string
  }
  subtitle: string
  buttons: {
    primary: {
      text: string
      onClick: () => void
    }
    secondary: {
      text: string
      onClick: () => void
    }
  }
  className?: string
}

const AnimatedShaderHero: React.FC<HeroProps> = ({
  trustBadge,
  headline,
  subtitle,
  buttons,
  className = ''
}) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-black">
        {/* Animated Shader Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Trust Badge */}
        {trustBadge && (
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-zinc-800 shadow-sm">
            {trustBadge.icons && trustBadge.icons.map((icon, index) => (
              <span key={index} className="text-lg">{icon}</span>
            ))}
            <span className="text-sm font-medium text-gray-300">
              {trustBadge.text}
            </span>
          </div>
        )}

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-white">
            {headline.line1}
          </span>
          <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            {headline.line2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={buttons.primary.onClick}
            className="group relative px-8 py-4 bg-primary-600 text-white text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/50"
          >
            <span className="relative z-10">{buttons.primary.text}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={buttons.secondary.onClick}
            className="px-8 py-4 bg-zinc-900/80 backdrop-blur-sm text-white text-lg font-semibold rounded-lg border-2 border-zinc-800 hover:border-primary-500 transition-all duration-300 hover:scale-105"
          >
            {buttons.secondary.text}
          </button>
        </div>

        {/* Floating Elements */}
        <div className="mt-16 flex justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-sm animate-float">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-gray-300">Fast Setup</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-sm animate-float animation-delay-1000">
            <span className="text-2xl">🤖</span>
            <span className="text-sm font-medium text-gray-300">AI-Powered</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-sm animate-float animation-delay-2000">
            <span className="text-2xl">💾</span>
            <span className="text-sm font-medium text-gray-300">Auto-Save</span>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default AnimatedShaderHero
