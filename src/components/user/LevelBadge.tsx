import React, { FC } from 'react'

import { BadgeIcon } from '../icons/BadgeIcon'

interface ILevelBadgeProps {
  level: number
  size?: string
  showLabel?: boolean
}

export const LevelBadge: FC<ILevelBadgeProps> = ({ level, size = '4.8rem', showLabel = true }) => {
  return (
    <div className="relative flex items-center justify-center">
      <BadgeIcon size={size} className="absolute fill-lightBlue" />
      <div className="absolute flex flex-col items-center justify-center text-12 leading-tight">
        {showLabel && <div className="text-8 uppercase">Level</div>}
        <div>{level}</div>
      </div>
    </div>
  )
}
