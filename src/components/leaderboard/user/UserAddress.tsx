import React from 'react'

import { shortenAddress } from '../../../lib/helpers'

export const UserAddress = ({ username, address }) => {
  console.log({ address })
  return (
    <div className="flex items-end justify-start">
      {username ? (
        <>
          <span>
            <h2>{username.replace('.eth', '')}</h2>
          </span>
          <span className="hidden text-grey-7 tablet:inline">.eth</span>
        </>
      ) : (
        <span className="font-bold">{shortenAddress(address)}</span>
      )}
    </div>
  )
}
