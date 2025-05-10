'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Image from 'next/image'

export default function TimeTrackerPomodoro() {
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todayPomodoros, setTodayPomodoros] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalTime, setTotalTime] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <div className="flex flex-col items-center">
          <div className="relative mb-8 h-[300px] w-[300px]">
            <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-light">{formatTime(timeLeft)}</div>
            </div>
          </div>
          <Button
            onClick={handleStart}
            className="w-32 rounded-full bg-[#3B9AE1] hover:bg-[#2980b9]"
            disabled={isRunning}
          >
            開始
          </Button>
        </div>
      </div>

      <div className="w-64">
        <div className="space-y-4">
          <Card className="border-0 p-4 shadow-sm">
            <div className="text-sm text-gray-500">今日のポモ</div>
            <div className="text-2xl font-semibold">{todayPomodoros}</div>
          </Card>

          <Card className="border-0 p-4 shadow-sm">
            <div className="text-sm text-gray-500">今日の集中時間</div>
            <div className="text-2xl font-semibold">{totalTime}m</div>
          </Card>

          <Card className="border-0 p-4 shadow-sm">
            <div className="text-sm text-gray-500">今日の統計</div>
            <div className="text-2xl font-semibold">{totalTime}m</div>
          </Card>

          <div className="mt-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-sm font-medium">フォーカスレコード</div>
              <Button variant="ghost" size="sm" className="h-6 px-1"></Button>
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
