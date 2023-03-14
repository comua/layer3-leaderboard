import clsx from 'clsx'
import React, { FC } from 'react'

import { User } from '../../../lib/types'
import { Badge, BadgeSize } from '../../Badge'
import { UserAddress } from '../user/UserAddress'
import { UserAvatar } from '../user/UserAvatar'
import { TopUserRank } from './TopUserRank'
import { TopUserStat } from './TopUserStat'

interface ITopUserCard {
  user: User
}

export const TopUserCard: FC<ITopUserCard> = ({ user }) => {
  const isRunnerUp = user.rank > 1

  const userRank1Border = 'border-amber-300 group-hover:glow-gold'
  const userRank2Border = 'border-slate-300 group-hover:glow-silver'
  const userRank3Border = 'border-amber-500 group-hover:glow-bronze'

  return (
    <button className="group flex cursor-pointer flex-col items-center justify-center transition-transform duration-200 hover:-translate-y-8 tablet:min-w-[19.2rem]">
      <div className="mb-12 tablet:mb-16">
        <TopUserRank rank={user.rank} />
      </div>
      <div className="relative flex flex-col justify-center rounded p-16 transition-[colors] duration-100">
        <div className="relative mb-24 flex items-center justify-center">
          <div
            className={clsx(
              'absolute aspect-square rounded-full border transition-[filter] duration-200',
              {
                'w-96 tablet:w-144': isRunnerUp,
                'w-[12.8rem] tablet:w-192': !isRunnerUp,
                [userRank1Border]: user.rank === 1,
                [userRank2Border]: user.rank === 2,
                [userRank3Border]: user.rank === 3,
              }
            )}
          />
          <UserAvatar
            avatarCid={user.avatarCid}
            className={clsx('aspect-square', {
              'w-48 tablet:w-96': isRunnerUp,
              'w-80 tablet:w-144': !isRunnerUp,
            })}
          />
          <div className="absolute bottom-0">
            <Badge label="Level" value={user.level} showLabel={false} size={BadgeSize.Medium} />
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center rounded-sm transition-[colors] duration-100">
          <div className="transition-colors duration-100 group-hover:text-brand tablet:pb-8">
            <UserAddress username={user.username} address={user.address} />
          </div>
          <div className="pt-4 tablet:pt-8">
            <TopUserStat value={user.xp} label="Experience" />
            <div className="hidden pt-4 mobile:block">
              <TopUserStat value={user.gmStreak} label="GM Streak" />
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}
