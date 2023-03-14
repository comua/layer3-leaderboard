import React, { FC } from 'react'

import { clsxm } from '../../../lib/clsxm'
import { shortenAddress } from '../../../lib/helpers'

interface IUserAddressProps {
  username: string
  address: string
  isRow?: boolean
}

export const UserAddress: FC<IUserAddressProps> = ({ username, address, isRow }) => {
  return (
    <div
      className={clsxm('text-ellipsis font-accent font-semibold', {
        'text-24  ': isRow,
        'text-24 tablet:text-32': !isRow,
      })}
    >
      {username ? (
        <span>
          <span>{username.replace('.eth', '')}</span>
          <span
            className={clsxm('hidden text-grey-9 tablet:inline', {
              'tablet:text-16': !isRow,
            })}
          >
            .eth
          </span>
        </span>
      ) : (
        <span>
          <span className="text-grey-9">0x</span>
          {shortenAddress(address).replace('0x', '')}
        </span>
      )}
    </div>
  )
}
