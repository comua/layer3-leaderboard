import React, { FC } from 'react'

import { GmStreakIcon } from '../../icons/GmStreakIcon'

interface IUserGmStreak {
  gmStreak: number
}

export const UserGmStreak: FC<IUserGmStreak> = ({ gmStreak }) => {
  return (
    <div className="flex items-center justify-end gap-4 whitespace-nowrap">
      {gmStreak} <GmStreakIcon size={24} />
    </div>
  )
}
