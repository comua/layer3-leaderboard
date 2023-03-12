import React, { FC } from 'react'

import { User } from '../../lib/types'
import { LevelBadge } from '../user/LevelBadge'
import { UserAddress } from '../user/UserAddress'
import { UserAvatar } from '../user/UserAvatar'
import { UserExperience } from '../user/UserExperience'
import { UserGmStreak } from '../user/UserGmStreak'

interface ITopUserCard {
  user: User
}

export const TopUserCard: FC<ITopUserCard> = ({ user }) => {
  const isRunnerUp = user.rank > 1

  return (
    <button className="flex cursor-pointer flex-col items-center justify-center rounded p-16 font-bold transition-[background] duration-100 hover:bg-background-secondary">
      <div
        className={`mb-16 flex aspect-square w-32 items-center justify-center rounded-full font-bold
        ${user.rank === 1 && 'border border-amber-300 bg-amber-500'}
        ${user.rank === 2 && 'border border-slate-300 bg-slate-500'}
        ${user.rank === 3 && 'border border-amber-500 bg-amber-700'}`}
      >
        <div className="aspect-square w-[1.2rem] rounded-full">{user.rank}</div>
      </div>
      <div className="relative mb-24 flex justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute aspect-square w-64 rounded-sm tablet:w-96" />
          <UserAvatar
            avatarCid={user.avatarCid}
            className={`aspect-square rounded-sm ${
              isRunnerUp ? 'w-48 tablet:w-64' : 'w-64 tablet:w-96'
            }`}
          />
        </div>
        <div className="absolute -bottom-4">
          <LevelBadge level={user.level} showLabel={false} size="3.2rem" />
        </div>
      </div>
      <div className="mb-16">
        <UserAddress username={user.username} address={user.address} />
      </div>
      <UserExperience xp={user.xp} />
      <UserGmStreak gmStreak={user.gmStreak} />
    </button>
  )
}
