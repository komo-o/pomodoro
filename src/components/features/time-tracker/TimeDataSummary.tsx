'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Download, Share2, Printer, ChevronDown, MoreHorizontal } from 'lucide-react'

export default function TimeDataSummary() {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-baseline gap-8">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-500">合計:</span>
          <span className="text-sm font-medium">00:00:22</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-500">請求可能:</span>
          <span className="text-sm font-medium">00:00:00</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium">0.00 USD</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="text-sm">
          <Download className="mr-1 h-3 w-3" />
          輸出 <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="outline" size="icon">
          <Printer className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="text-sm">
          <MoreHorizontal className="h-4 w-4" />
          丸め
        </Button>
      </div>
    </div>
  )
}
