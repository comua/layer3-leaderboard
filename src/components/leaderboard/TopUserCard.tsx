import clsx from 'clsx'
import React, { FC } from 'react'

import { User } from '../../lib/types'
import { Badge, BadgeSize } from '../Badge'
import { CrownIcon } from '../icons/CrownIcon'
import { UserAddress } from './user/UserAddress'
import { UserAvatar } from './user/UserAvatar'
import { UserExperience } from './user/UserExperience'
import { UserGmStreak } from './user/UserGmStreak'

interface ITopUserCard {
  user: User
}

export const TopUserCard: FC<ITopUserCard> = ({ user }) => {
  const isRunnerUp = user.rank > 1

  return (
    <button className="flex cursor-pointer flex-col items-center justify-center rounded p-16 transition-[background] duration-100 hover:bg-background-secondary tablet:px-24">
      <div className="mb-16">
        {isRunnerUp ? (
          <div
            className={clsx(
              'mt-8 flex aspect-square w-24 items-center justify-center rounded-full text-12 font-semibold',
              {
                'border border-slate-300 bg-slate-500': user.rank === 2,
                'border border-amber-500 bg-amber-700': user.rank === 3,
              }
            )}
          >
            {user.rank}
          </div>
        ) : (
          <CrownIcon size="4.8rem" className="gold-glow animate-bounce fill-amber-300" />
        )}
      </div>
      <div className="relative mb-24 flex justify-center">
        <UserAvatar
          avatarCid={user.avatarCid}
          className={clsx('aspect-square rounded-sm', {
            'w-48 tablet:w-64': isRunnerUp,
            'w-64 tablet:w-96': !isRunnerUp,
            'border border-amber-300': user.rank === 1,
            'border border-slate-300': user.rank === 2,
            'border border-amber-500': user.rank === 3,
          })}
        />
        <div className="absolute -bottom-4">
          <Badge label="Level" value={user.level} showLabel={false} size={BadgeSize.medium} />
        </div>
      </div>
      <div className="mb-16">
        <UserAddress username={user.username} address={user.address} />
      </div>
      <div className="flex flex-col items-end justify-center gap-4">
        <UserExperience xp={user.xp} long />
        <UserGmStreak gmStreak={user.gmStreak} />
      </div>
    </button>
  )
}
