import React, { FC } from 'react'

import { XpIcon } from '../../icons/XpIcon'

interface IUserExperienceProps {
  xp: number
  long?: boolean
}

export const UserExperience: FC<IUserExperienceProps> = ({ xp, long }) => {
  const compactXp = Intl.NumberFormat('en-US', {
    notation: 'compact',
  }).format(xp)

  return (
    <div className="flex items-center justify-end gap-4">
      {long ? (
        <span>
          <span className="hidden tablet:inline">{xp}</span>
          <span className="inline tablet:hidden">{compactXp}</span>
        </span>
      ) : (
        compactXp
      )}{' '}
      <XpIcon size={24} />
    </div>
  )
}
