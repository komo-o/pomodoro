'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Clock,
  Calendar,
  LayoutDashboard,
  BarChart2,
  FolderClosed,
  Users,
  UserCircle,
  Tag,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-[220px] flex-col border-r bg-white">
      <nav className="flex-1 space-y-1 px-2 py-4">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start">
            <Clock className="mr-3 h-5 w-5 text-gray-500" />
            <span>タイムトラッカー</span>
          </Button>
        </Link>

        <Button variant="ghost" className="w-full justify-start">
          <Calendar className="mr-3 h-5 w-5 text-gray-500" />
          <span>カレンダー</span>
        </Button>

        <div className="px-3 py-2 text-xs text-gray-500">分析する</div>

        <Button variant="ghost" className="w-full justify-start">
          <LayoutDashboard className="mr-3 h-5 w-5 text-gray-500" />
          <span>ダッシュボード</span>
        </Button>

        <Link href="/report">
          <Button variant="ghost" className="flex w-full items-center justify-start">
            <BarChart2 className="mr-3 h-5 w-5 text-gray-500" />
            <span>レポート</span>
            <ChevronRight className="ml-auto h-4 w-4" />
          </Button>
        </Link>

        <div className="px-3 py-2 text-xs text-gray-500">管理</div>

        <Button variant="ghost" className="w-full justify-start">
          <FolderClosed className="mr-3 h-5 w-5 text-gray-500" />
          <span>プロジェクト</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-3 h-5 w-5 text-gray-500" />
          <span>チーム</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start">
          <UserCircle className="mr-3 h-5 w-5 text-gray-500" />
          <span>クライアント</span>
        </Button>

        <Button variant="ghost" className="w-full justify-start">
          <Tag className="mr-3 h-5 w-5 text-gray-500" />
          <span>タグ</span>
        </Button>

        <Button variant="ghost" className="w-full items-center justify-start">
          <ChevronDown className="mr-3 h-5 w-5 text-gray-500" />
          <span>もっと見せる</span>
        </Button>
      </nav>
    </div>
  )
}
