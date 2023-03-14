import clsx from 'clsx'
import React, { FC } from 'react'

import { User } from '../../lib/types'
import { Badge, BadgeSize } from '../Badge'
import { CrownIcon } from '../icons/CrownIcon'
import { UserAvatar } from './user/UserAvatar'

interface ITopUserCard {
  user: User
}

export const TopUserCard: FC<ITopUserCard> = ({ user }) => {
  const isRunnerUp = user.rank > 1

  const userRank1Border = 'border border-amber-300'
  const userRank2Border = 'border border-slate-300'
  const userRank3Border = 'border border-amber-500'

  return (
    <button className="group flex cursor-pointer flex-col items-center justify-center rounded py-16 transition-transform duration-200 hover:-translate-y-8">
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
          <CrownIcon size="4.8rem" className="glow-gold animate-bounce fill-amber-300" />
        )}
      </div>
      <div className="relative mb-24 flex justify-center">
        <UserAvatar
          avatarCid={user.avatarCid}
          className={clsx('aspect-square', {
            'w-48 tablet:w-96': isRunnerUp,
            'w-64 tablet:w-144': !isRunnerUp,
            [userRank1Border]: user.rank === 1,
            [userRank2Border]: user.rank === 2,
            [userRank3Border]: user.rank === 3,
          })}
        />
        <div className="absolute -bottom-4">
          <Badge label="Level" value={user.level} showLabel={false} size={BadgeSize.Medium} />
        </div>
      </div>
      <div className="mb-8 transition-colors duration-100 group-hover:text-brand">
        <h2 className="font-accent text-24 tablet:text-32">
          <span>{user.username.replace('.eth', '')}</span>
          <span className="hidden text-grey-9 tablet:inline">.eth</span>
        </h2>
      </div>
      <div className="corner-tri-bl corner-tri-tr group-hover:corner-brand relative flex w-full flex-col justify-center gap-4 bg-background-tertiary p-16 tablet:px-32">
        <div>
          <div className="font-semibold leading-none tablet:text-24">{user.xp}</div>
          <div className="text-8 uppercase text-grey-9 tablet:text-14">Experience</div>
        </div>
        <div>
          <div className="font-semibold leading-none tablet:text-24">{user.gmStreak}</div>
          <div className="text-8 uppercase text-grey-9 tablet:text-14">GM Streak</div>
        </div>
      </div>
    </button>
  )
}
