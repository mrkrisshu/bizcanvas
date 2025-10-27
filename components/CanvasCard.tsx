'use client'

import Link from 'next/link'
import { format } from 'date-fns'

interface CanvasCardProps {
  id: string
  title: string
  createdAt: string
}

export function CanvasCard({ id, title, createdAt }: CanvasCardProps) {
  return (
    <Link href={`/canvas/${id}`}>
      <div className="bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400">
          Created {format(new Date(createdAt), 'MMM d, yyyy')}
        </p>
      </div>
    </Link>
  )
}
