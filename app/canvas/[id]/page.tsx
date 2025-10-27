'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { CanvasGrid } from '@/components/CanvasGrid'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download } from 'lucide-react'
import { BusinessModelCanvas } from '@/lib/database.types'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function CanvasPage() {
  const router = useRouter()
  const params = useParams()
  const canvasId = params?.id as string

  const [canvas, setCanvas] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (canvasId) {
      fetchCanvas()
    }
  }, [canvasId])

  const fetchCanvas = async () => {
    const { data, error } = await supabase.from('canvases').select('*').eq('id', canvasId).single()

    if (error) {
      console.error('Error fetching canvas:', error)
      router.push('/dashboard')
      return
    }

    setCanvas(data)
    setLoading(false)
  }

  const handleSave = async (data: BusinessModelCanvas) => {
    setSaving(true)
    const { error } = await supabase
      .from('canvases')
      .update({ data: data as any, updated_at: new Date().toISOString() })
      .eq('id', canvasId)

    if (error) {
      console.error('Error saving canvas:', error)
      alert('Failed to save canvas')
    }

    setSaving(false)
  }

  const exportToPDF = async () => {
    const element = document.getElementById('canvas-grid')
    if (!element) return

    const canvas = await html2canvas(element, {
      scale: 3,
      backgroundColor: '#000000',
      width: 1920,
      height: 1080,
      windowWidth: 1920,
      windowHeight: 1080,
    })

    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    })

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${canvas.title || 'business-model-canvas'}.pdf`)
  }

  const exportToPNG = async () => {
    const element = document.getElementById('canvas-grid')
    if (!element) return

    const canvas = await html2canvas(element, {
      scale: 3,
      backgroundColor: '#000000',
      width: 1920,
      height: 1080,
      windowWidth: 1920,
      windowHeight: 1080,
    })

    canvas.toBlob((blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${canvas.title || 'business-model-canvas'}.png`
      a.click()
      URL.revokeObjectURL(url)
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading canvas...</div>
      </div>
    )
  }

  if (!canvas) {
    return null
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => router.push('/dashboard')}
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-xl font-bold">{canvas.title}</h1>
                <p className="text-sm text-gray-400">
                  {saving ? 'Saving...' : 'Auto-saved'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={exportToPNG}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export PNG
              </Button>
              <Button
                onClick={exportToPDF}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div id="canvas-grid" className="p-8 bg-black min-h-screen">
          <h2 className="text-3xl font-bold mb-12 text-center">{canvas.title}</h2>
          <CanvasGrid canvasData={canvas.data} canvasId={canvasId} onSave={handleSave} />
        </div>
      </main>
    </div>
  )
}
