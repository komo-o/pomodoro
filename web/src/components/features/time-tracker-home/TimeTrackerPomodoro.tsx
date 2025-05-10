'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

type TimeTrackerPomodoroProps = {
  duration: number
}

export default function TimeTrackerPomodoro({ duration }: TimeTrackerPomodoroProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

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
          <div className="relative mb-8 h-[400px] w-[400px]">
            <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-light">{formatTime(timeLeft)}</div>
            </div>
          </div>
          <Button
            onClick={handleStart}
            className="w-40 rounded-full bg-[#3B9AE1] py-6 text-lg hover:bg-[#2980b9]"
            disabled={isRunning}
          >
            開始
          </Button>
        </div>
      </div>
    </div>
  )
}
