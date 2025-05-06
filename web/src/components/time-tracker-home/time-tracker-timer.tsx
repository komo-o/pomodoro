'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import Image from 'next/image'

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

      <div className="w-64">
        <div className="space-y-4">
          <Card className="border-0 p-4 shadow-sm">
            <div className="text-sm text-gray-500">今日の統計</div>
            <div className="text-2xl font-semibold">0m</div>
          </Card>

          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-sm font-medium">フォーカスレコード</div>
              <Button variant="ghost" size="sm" className="h-6 px-1">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <Card className="flex h-32 flex-col items-center justify-center border-0 p-4 text-center shadow-sm">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/4989/4989793.png"
                alt="Empty state"
                width={48}
                height={48}
                className="mb-2 h-12 w-12 opacity-50"
              />
              <div className="text-sm text-gray-500">まだ集中記録がありません。</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
