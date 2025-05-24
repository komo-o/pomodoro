import React from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Clock, ListTodo, Trophy, Settings, BarChart2 } from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-52 flex-col border-r bg-white">
      <nav className="">
        <Link href="/">
          <Button variant="ghost" className="h-12 w-full justify-start px-6">
            <Clock className="mr-1 h-6 w-6 text-gray-500" />
            <span className="text-base">ポモドーロ</span>
          </Button>
        </Link>

        <Link href="/task-mng">
          <Button variant="ghost" className="h-12 w-full justify-start px-6">
            <ListTodo className="mr-1 h-6 w-6 text-gray-500" />
            <span className="text-base">タスク管理</span>
          </Button>
        </Link>

        <Link href="/ranking">
          <Button variant="ghost" className="h-12 w-full justify-start px-6">
            <Trophy className="mr-1 h-6 w-6 text-gray-500" />
            <span className="text-base">ランキング</span>
          </Button>
        </Link>

        <Link href="/report">
          <Button variant="ghost" className="h-12 w-full justify-start px-6">
            <BarChart2 className="mr-1 h-6 w-6 text-gray-500" />
            <span className="text-base">レポート</span>
          </Button>
        </Link>

        <Link href="/settings">
          <Button variant="ghost" className="h-12 w-full justify-start px-6">
            <Settings className="mr-1 h-6 w-6 text-gray-500" />
            <span className="text-base">設定</span>
          </Button>
        </Link>
      </nav>
    </div>
  )
}
