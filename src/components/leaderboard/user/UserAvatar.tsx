import clsx from 'clsx'
import Image from 'next/image'
import React, { FC } from 'react'

interface IUserAvatarProps {
  avatarCid: string
  className: string
}

export const UserAvatar: FC<IUserAvatarProps> = ({ avatarCid, className }) => {
  return (
    <Image
      src={`https://gateway.pinata.cloud/ipfs/${avatarCid}`}
      alt="avatar"
      width={100}
      height={100}
      className={clsx('rounded', className)}
    />
  )
}
