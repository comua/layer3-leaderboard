import React from 'react'

import { shortenAddress } from '../../../lib/helpers'
import { Badge, BadgeSize } from '../../Badge'
import { GmStreakIcon } from '../../icons/GmStreakIcon'
import { Column } from '../Column'
import { UserAvatar } from './UserAvatar'
import { UserExperience } from './UserExperience'

export const UserRow = ({ user }) => {
  return (
    <button className="corner-tri-bl corner-tri-tr grid-leaderboard group relative mb-4 w-full cursor-pointer bg-background-tertiary px-24 transition-[background,transform] duration-200 hover:translate-x-2 hover:-translate-y-2 hover:bg-background-secondary">
      <Column className="justify-start font-accent font-bold tablet:justify-center tablet:text-32">
        {user.rank}
      </Column>
      <Column center className="relative flex items-center justify-center py-4">
        <UserAvatar
          avatarCid={user.avatarCid}
          className="aspect-square w-48 border border-background-secondary tablet:w-64"
        />
        <div className="absolute bottom-4 mobile:hidden">
          <Badge value={user.level} size={BadgeSize.Small} showLabel={false} />
        </div>
      </Column>
      <Column center className="hidden mobile:block">
        <Badge value={user.level} size={BadgeSize.Medium} showLabel={false} />
      </Column>
      <Column className="flex h-full items-center pl-16 transition-colors duration-100 group-hover:text-brand tablet:pl-24">
        {user.username ? (
          <span className="font-semibold tablet:text-[2rem]">
            <span>{user.username.replace('.eth', '')}</span>
            <span className="hidden text-14 text-grey-9 tablet:inline">.eth</span>
          </span>
        ) : (
          <span>{shortenAddress(user.address)}</span>
        )}
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
