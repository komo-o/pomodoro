'use client'

import { useState } from 'react'
import MainLayout from '@/components/layouts/main-layout'
import Toggle from '@/components/ui/Toggle'

interface SettingItem {
  key: string
  title: string
  description: string
}

const settingsList: SettingItem[] = [
  {
    key: 'mailNotification',
    title: 'メール通知',
    description: '新しい通知やお知らせをメールで受け取ります。'
  },
  {
    key: 'darkMode',
    title: 'ダークモード',
    description: 'ダークモードでアプリを表示します。'
  }
]

export default function SettingsPage() {
  const [toggles, setToggles] = useState({
    mailNotification: false,
    darkMode: false
  })

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="space-y-6">
          {settingsList.map((setting) => (
            <div key={setting.key} className="flex items-start justify-between gap-4 rounded-lg bg-white p-6 shadow">
              <div>
                <div className="mb-1 text-lg font-semibold">{setting.title}</div>
                <div className="text-sm leading-relaxed text-gray-500">{setting.description}</div>
              </div>
              <Toggle
                checked={toggles[setting.key as keyof typeof toggles]}
                onChange={() => handleToggle(setting.key)}
              />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
