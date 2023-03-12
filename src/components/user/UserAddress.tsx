import React from 'react'

export const UserAddress = ({ username, address }) => {
  return (
    <div className="flex justify-start">
      {username ? (
        <>
          <span>{username.replace('.eth', '')}</span>
          <span className="hidden text-grey-7 tablet:inline">.eth</span>
        </>
      ) : (
        <span>{address}</span>
      )}
    </div>
  )
}
