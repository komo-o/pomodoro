'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const weekDays = [
  { day: '月, 4月 28', time: '00:00:00' },
  { day: '火, 4月 29', time: '00:00:00' },
  { day: '水, 4月 30', time: '00:00:00' },
  { day: '木, 5月 1', time: '00:00:00' },
  { day: '金, 5月 2', time: '00:00:00' },
  { day: '土, 5月 3', time: '00:00:00' },
  { day: '日, 5月 4', time: '00:00:22' }
]

const data = [
  { name: '月', value: 0 },
  { name: '火', value: 0 },
  { name: '水', value: 0 },
  { name: '木', value: 0 },
  { name: '金', value: 0 },
  { name: '土', value: 0 },
  { name: '日', value: 22 }
]

const COLORS = ['#A5D78F', '#E0E0E0']

export default function TimeChartView() {
  return (
    <div className="rounded-md border bg-white p-4">
      <div className="flex h-80">
        <div className="h-full flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 50
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
              <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}m`} />
              <Bar dataKey="value" fill="#A5D78F" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex w-64 items-center justify-center">
          <div className="relative">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Tracked', value: 22 },
                    { name: 'Empty', value: 78 }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-medium">00:00:22</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-between px-6 text-xs text-gray-500">
        {weekDays.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div>{day.time}</div>
            <div className="mt-1">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
