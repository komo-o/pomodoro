'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table'

export default function TimeEntryTable() {
  return (
    <div className="rounded-md border bg-white">
      <div className="flex items-center justify-between border-b p-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">グループ化:</span>
          <Button variant="outline" size="sm" className="text-sm">
            計画 <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="text-sm">
            説明 <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
          <div className="ml-4 flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm text-gray-500">見積もりを表示</span>
          </div>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]"></TableHead>
            <TableHead>タイトル</TableHead>
            <TableHead className="text-right">間隔</TableHead>
            <TableHead className="text-right">額</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="flex items-center">
              <span className="mr-2 h-2 w-2 rounded-full bg-gray-300"></span>
              (詳細なし)
            </TableCell>
            <TableCell className="text-right">00:00:22</TableCell>
            <TableCell className="text-right">0.00 USD</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
