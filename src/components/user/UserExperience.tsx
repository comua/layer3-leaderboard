import React, { FC } from 'react'

import { COMPACT_NUMBER_FORMATTER } from '../../lib/constants'

interface IUserExperienceProps {
  xp: number
}

export const UserExperience: FC<IUserExperienceProps> = ({ xp }) => {
  return (
    <div className="flex justify-end whitespace-nowrap">
      <div>
        {COMPACT_NUMBER_FORMATTER.format(xp)} <span className="text-grey-7">XP</span>
      </div>
    </div>
  )
}
