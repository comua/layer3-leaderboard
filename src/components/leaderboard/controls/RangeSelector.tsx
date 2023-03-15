import React, { FC } from 'react'

import { Button } from '../../core/Button'

export const RangeSelector: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-4 rounded-full bg-background-secondary p-4 text-12">
        <Button isSelected>All Time</Button>
        <Button>This Month</Button>
        <Button>This Week</Button>
        <Button>Today</Button>
      </div>
    </div>
  )
}
