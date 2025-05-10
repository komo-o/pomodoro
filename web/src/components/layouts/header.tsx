'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import { Bell, HelpCircle } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-white px-6">
      <div className="flex items-center">
        <div className="mr-8 flex items-center">
          <span className="text-2xl font-bold text-[#3B9AE1]">Pomodoro</span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" className="border-[#3B9AE1] text-[#3B9AE1] hover:bg-[#3B9AE1]/10">
          アップグレード
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5 text-gray-500" />
        </Button>
        <Avatar className="h-8 w-8 bg-purple-700">
          <AvatarFallback>KO</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
