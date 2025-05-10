'use client'

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import TimeTrackerPomodoro from './TimeTrackerPomodoro'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const TIMER_DURATIONS = {
  pomodoro: 25 * 60,
  'short-break': 5 * 60,
  'long-break': 15 * 60
}

export default function TimeTrackerHome() {
  const [activeTab, setActiveTab] = useState('pomodoro')
  const [selectedTask, setSelectedTask] = useState('')

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[500px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pomodoro" className="data-[state=active]:bg-[#3B9AE1] data-[state=active]:text-white">
                ポモドーロ
              </TabsTrigger>
              <TabsTrigger
                value="short-break"
                className="data-[state=active]:bg-[#3B9AE1] data-[state=active]:text-white"
              >
                小休憩
              </TabsTrigger>
              <TabsTrigger
                value="long-break"
                className="data-[state=active]:bg-[#3B9AE1] data-[state=active]:text-white"
              >
                長休憩
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <TimeTrackerPomodoro duration={TIMER_DURATIONS[activeTab as keyof typeof TIMER_DURATIONS]} />

        <div className="mt-8 w-[300px]">
          <Select value={selectedTask} onValueChange={setSelectedTask}>
            <SelectTrigger>
              <SelectValue placeholder="タスクを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="task1">タスク1</SelectItem>
              <SelectItem value="task2">タスク2</SelectItem>
              <SelectItem value="task3">タスク3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
