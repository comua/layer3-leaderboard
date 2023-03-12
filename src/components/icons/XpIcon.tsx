import Image from 'next/image'
import React, { FC } from 'react'

import xpImage from '../../../public/assets/xp.png'

interface IXpIconProps {
  size?: number
  className?: string
}

export const XpIcon: FC<IXpIconProps> = ({ size = 112, className }) => {
  const height = (size * 113) / 112
  return <Image src={xpImage} alt="xp" width={size} height={height} className={className} />
}
