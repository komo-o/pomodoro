'use client'

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { Button } from '@/components/ui/Button'
import { Plus } from 'lucide-react'
import TimeTrackerTimer from './TimeTrackerTimer'
import TimeTrackerPomodoro from './TimeTrackerPomodoro'

export default function TimeTrackerHome() {
  const [activeTab, setActiveTab] = useState('pomodoro')

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pomodoro" className="data-[state=active]:bg-[#3B9AE1] data-[state=active]:text-white">
              ポモドーロ
            </TabsTrigger>
            <TabsTrigger value="timer" className="data-[state=active]:bg-[#3B9AE1] data-[state=active]:text-white">
              タイマー
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
          <span className="text-sm text-gray-500">概観</span>
        </div>
      </div>

      {activeTab === 'pomodoro' ? <TimeTrackerPomodoro /> : <TimeTrackerTimer />}
    </div>
  )
}
