"use client";

import React from "react";
import TimeTrackerHeader from "./time-tracker-header";
import TimeFilterBar from "./time-filter-bar";
import TimeChartView from "./time-chart-view";
import TimeEntryTable from "./time-entry-table";
import TimeDataSummary from "./time-data-summary";

export default function TimeTracker() {
  return (
    <div className="h-full flex flex-col">
      <TimeTrackerHeader />
      <TimeFilterBar />
      <TimeDataSummary />
      <div className="px-6 py-4">
        <TimeChartView />
      </div>
      <div className="px-6 mb-6">
        <TimeEntryTable />
      </div>
    </div>
  );
}