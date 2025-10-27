'use client'

import { useEffect, useRef } from 'react'

interface Light {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
  opacity: number
}

export default function FloatingLights() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create floating lights
    const lights: Light[] = []
    const lightCount = 15
    const colors = [
      'rgba(147, 197, 253, ', // blue
      'rgba(196, 181, 253, ', // purple
      'rgba(252, 165, 165, ', // red/pink
      'rgba(134, 239, 172, ', // green
    ]

    for (let i = 0; i < lightCount; i++) {
      lights.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 60 + 40,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.15 + 0.05
      })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      lights.forEach(light => {
        // Update position
        light.x += light.vx
        light.y += light.vy

        // Bounce off edges with smooth transition
        if (light.x - light.radius < 0 || light.x + light.radius > canvas.width) {
          light.vx *= -1
        }
        if (light.y - light.radius < 0 || light.y + light.radius > canvas.height) {
          light.vy *= -1
        }

        // Draw light orb with gradient
        const gradient = ctx.createRadialGradient(
          light.x, light.y, 0,
          light.x, light.y, light.radius
        )
        gradient.addColorStop(0, `${light.color}${light.opacity})`)
        gradient.addColorStop(0.5, `${light.color}${light.opacity * 0.5})`)
        gradient.addColorStop(1, `${light.color}0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  )
}
