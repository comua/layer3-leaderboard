import React from 'react'

import { Badge, BadgeSize } from '../../Badge'
import { UserAddress } from './UserAddress'
import { UserAvatar } from './UserAvatar'
import { UserExperience } from './UserExperience'
import { UserGmStreak } from './UserGmStreak'

export const UserRow = ({ user }) => {
  return (
    <button className="leaderboard-grid mb-8 w-full cursor-pointer rounded py-16 px-24 transition-[background] duration-100 hover:bg-background-tertiary">
      <div className="flex justify-start">{user.rank}</div>
      <div className="relative flex justify-center">
        <div className="absolute -bottom-2">
          <Badge value={user.level} size={BadgeSize.small} showLabel={false} />
        </div>
        <UserAvatar
          avatarCid={user.avatarCid}
          className="aspect-square w-48 rounded-sm tablet:w-64"
        />
      </div>
      <UserAddress username={user.username} address={user.address} />
      <div className="hidden mobile:block">
        <UserGmStreak gmStreak={user.gmStreak} />
      </div>
      <UserExperience xp={user.xp} long />
    </button>
  )
}
