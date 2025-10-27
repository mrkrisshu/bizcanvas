'use client'

import { useState, useEffect } from 'react'
import { BusinessModelCanvas } from '@/lib/database.types'

interface CanvasGridProps {
  canvasData: BusinessModelCanvas
  canvasId: string
  onSave?: (data: BusinessModelCanvas) => void
}

export function CanvasGrid({ canvasData, canvasId, onSave }: CanvasGridProps) {
  const [data, setData] = useState<BusinessModelCanvas>(canvasData)
  const [saveTimeout, setSaveTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleChange = (key: keyof BusinessModelCanvas, value: string[]) => {
    const newData = { ...data, [key]: value }
    setData(newData)

    // Debounce auto-save
    if (saveTimeout) {
      clearTimeout(saveTimeout)
    }

    const timeout = setTimeout(() => {
      if (onSave) {
        onSave(newData)
      }
    }, 2000)

    setSaveTimeout(timeout)
  }

  const Section = ({ 
    title, 
    dataKey, 
    color 
  }: { 
    title: string
    dataKey: keyof BusinessModelCanvas
    color: string 
  }) => (
    <div className={`bg-gradient-to-br ${color} border-2 border-gray-700 rounded-lg p-4 h-full flex flex-col`}>
      <h3 className="text-base font-bold text-white mb-2 border-b border-gray-600 pb-2">{title}</h3>
      <div className="flex-1">
        <ul className="space-y-1.5 text-xs text-gray-200">
          {data[dataKey].map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-1.5">
              <span className="text-blue-400 mt-0.5 flex-shrink-0 text-xs">•</span>
              <span className="flex-1 break-words leading-tight">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="w-full space-y-6">
      {/* Top Row - 5 columns in one grid */}
      <div className="grid grid-cols-5 gap-6">
        {/* Column 1: Key Partners - Full Height */}
        <div className="min-h-[500px]">
          <Section 
            title="Key Partners" 
            dataKey="key_partners" 
            color="from-cyan-700/50 to-blue-700/50" 
          />
        </div>
        
        {/* Column 2: Key Activities & Key Resources - Stacked */}
        <div className="flex flex-col gap-6 min-h-[500px]">
          <div className="flex-1 min-h-[240px]">
            <Section 
              title="Key Activities" 
              dataKey="key_activities" 
              color="from-pink-700/50 to-rose-700/50" 
            />
          </div>
          <div className="flex-1 min-h-[240px]">
            <Section 
              title="Key Resources" 
              dataKey="key_resources" 
              color="from-lime-700/50 to-green-700/50" 
            />
          </div>
        </div>
        
        {/* Column 3: Value Propositions - Full Height */}
        <div className="min-h-[500px]">
          <Section 
            title="Value Propositions" 
            dataKey="value_propositions" 
            color="from-red-700/50 to-orange-700/50" 
          />
        </div>
        
        {/* Column 4: Customer Relationships & Channels - Stacked */}
        <div className="flex flex-col gap-6 min-h-[500px]">
          <div className="flex-1 min-h-[240px]">
            <Section 
              title="Customer Relationships" 
              dataKey="customer_relationships" 
              color="from-indigo-700/50 to-blue-700/50" 
            />
          </div>
          <div className="flex-1 min-h-[240px]">
            <Section 
              title="Channels" 
              dataKey="channels" 
              color="from-teal-700/50 to-cyan-700/50" 
            />
          </div>
        </div>
        
        {/* Column 5: Customer Segments - Full Height */}
        <div className="min-h-[500px]">
          <Section 
            title="Customer Segments" 
            dataKey="customer_segments" 
            color="from-purple-700/50 to-violet-700/50" 
          />
        </div>
      </div>
      
      {/* Bottom Row - 2 columns COMPLETELY SEPARATE */}
      <div className="grid grid-cols-2 gap-6">
        {/* Cost Structure */}
        <div className="min-h-[280px]">
          <Section 
            title="Cost Structure" 
            dataKey="cost_structure" 
            color="from-amber-700/50 to-yellow-700/50" 
          />
        </div>
        
        {/* Revenue Streams */}
        <div className="min-h-[280px]">
          <Section 
            title="Revenue Streams" 
            dataKey="revenue_streams" 
            color="from-emerald-700/50 to-green-700/50" 
          />
        </div>
      </div>
    </div>
  )
}
