import React, { FC } from 'react'

interface IUserGmStreak {
  gmStreak: number
}

export const UserGmStreak: FC<IUserGmStreak> = ({ gmStreak }) => {
  return (
    <div className="flex justify-end whitespace-nowrap">
      <div>
        {gmStreak}{' '}
        <span className="text-grey-7">
          GM<span className="hidden tablet:inline"> Streak</span>
        </span>
      </div>
    </div>
  )
}
