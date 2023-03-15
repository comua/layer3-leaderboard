import clsx from 'clsx'
import React, { FC } from 'react'

import { User } from '../../../lib/types'
import { Badge, BadgeSize } from '../../core/Badge'
import { GmStreakIcon } from '../../icons/GmStreakIcon'
import { Column } from '../Column'
import { UserAddress } from './UserAddress'
import { UserAvatar } from './UserAvatar'
import { UserExperience } from './UserExperience'

interface IUserRowProps {
  user: User
  isCurrentUser?: boolean
}

export const UserRow: FC<IUserRowProps> = ({ user, isCurrentUser }) => {
  return (
    <button
      className={clsx(
        'grid-leaderboard group relative mb-4 w-full cursor-pointer rounded border-sm border-white/5 bg-background-secondary/50 px-24 backdrop-blur transition-[background,transform] duration-200 hover:translate-x-2 hover:-translate-y-2 hover:bg-background-tertiary/50',
        { '': isCurrentUser }
      )}
    >
      <Column className="justify-start font-accent text-24 font-semibold tablet:justify-center">
        {user.rank}
      </Column>

      <Column center className="relative my-8 flex items-center justify-center">
        <UserAvatar avatarCid={user.avatarCid} className="aspect-square w-48 tablet:w-64" />
        <div className="absolute bottom-0 mobile:hidden">
          <Badge value={user.level} size={BadgeSize.Small} showLabel={false} />
        </div>
      </Column>

      <Column center className="hidden mobile:block">
        <Badge value={user.level} size={BadgeSize.Medium} showLabel={false} />
      </Column>

      <Column className="h-full items-center pl-16 transition-colors duration-100 group-hover:text-brand tablet:pl-24">
        <UserAddress username={user.username} address={user.address} isRow />
      </Column>

      <Column center className="hidden font-semibold mobile:block">
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex justify-end">{user.gmStreak}</div>
          <GmStreakIcon size={24} className="flex justify-start" />
        </div>
      </Column>

      <Column className="justify-end font-semibold tablet:justify-center">
        <UserExperience xp={user.xp} long />
      </Column>
    </button>
  )
}
