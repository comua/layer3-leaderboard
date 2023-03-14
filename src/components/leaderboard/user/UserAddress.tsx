import clsx from 'clsx'
import React, { FC } from 'react'

import { shortenAddress } from '../../../lib/helpers'

interface IUserAddressProps {
  username: string
  address: string
  isRow?: boolean
}

export const UserAddress: FC<IUserAddressProps> = ({ username, address, isRow }) => {
  return (
    <div
      className={clsx('text-ellipsis font-accent font-semibold', {
        'text-24  ': isRow,
        'text-24 tablet:text-32': !isRow,
      })}
    >
      {username ? (
        <span>
          <span>{username.replace('.eth', '')}</span>
          <span
            className={clsx('hidden text-white/30 tablet:inline', {
              'tablet:text-16': !isRow,
            })}
          >
            .eth
          </span>
        </span>
      ) : (
        <span>
          <span className="text-white/30">0x</span>
          {shortenAddress(address).replace('0x', '')}
        </span>
      )}
    </div>
  )
}
