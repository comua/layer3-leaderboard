import React from 'react'

import { RangeItem } from './RangeItem'

export const RangeSelector = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-4 rounded-full bg-background-secondary p-4 text-12">
        <RangeItem isSelected>All Time</RangeItem>
        <RangeItem>This Month</RangeItem>
        <RangeItem>This Week</RangeItem>
        <RangeItem>Today</RangeItem>
      </div>
    </div>
  )
}
