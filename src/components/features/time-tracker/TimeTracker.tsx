'use client'

import React from 'react'
import TimeTrackerHeader from './TimeTrackerHeader'
import TimeFilterBar from './TimeFilterBar'
import TimeChartView from './TimeChartView'
import TimeEntryTable from './TimeEntryTable'
import TimeDataSummary from './TimeDataSummary'

export default function TimeTracker() {
  return (
    <div className="flex h-full flex-col">
      <TimeTrackerHeader />
      <TimeFilterBar />
      <TimeDataSummary />
      <div className="px-6 py-4">
        <TimeChartView />
      </div>
      <div className="mb-6 px-6">
        <TimeEntryTable />
      </div>
    </div>
  )
}
