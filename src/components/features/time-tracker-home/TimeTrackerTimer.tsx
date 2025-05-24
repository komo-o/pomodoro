'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export default function TimeTrackerTimer() {
  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <div className="flex flex-col items-center">
          <div className="relative mb-8 h-[300px] w-[300px]">
            <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-light">00:00</div>
            </div>
          </div>
          <Button className="w-32 rounded-full bg-[#3B9AE1] hover:bg-[#2980b9]">開始</Button>
        </div>
      </div>
    </div>
  )
}
