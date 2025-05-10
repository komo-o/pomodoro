'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TimeTrackerHeader() {
  return (
    <div className="border-b">
      <div className="flex items-center gap-1 border-b p-2">
        <Button variant="outline" className="text-sm font-normal">
          タイムレポート <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="ghost" className="text-sm">
          概要
        </Button>
        <Button variant="ghost" className="text-sm">
          詳細
        </Button>
        <Button variant="ghost" className="text-sm">
          毎週
        </Button>
        <Button variant="ghost" className="text-sm">
          共有
        </Button>
      </div>
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-2">
          <Button variant="outline" className="text-sm font-normal">
            今週 <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
          <div className="flex gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
