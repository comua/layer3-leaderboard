import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import React, { FC, useState } from 'react'

import fallbackAvatar from '../../../../public/assets/fallback-avatar.png'

interface IUserAvatarProps {
  avatarCid: string
  className: string
}

export const UserAvatar: FC<IUserAvatarProps> = ({ avatarCid, className }) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(
    `https://gateway.pinata.cloud/ipfs/${avatarCid}`
  )

  return (
    <Image
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackAvatar)
        }
      }}
      onError={() => {
        setImgSrc(fallbackAvatar)
      }}
      alt="avatar"
      width={100}
      height={100}
      className={clsx('rounded-full', className)}
    />
  )
}
