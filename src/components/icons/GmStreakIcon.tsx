import Image from 'next/image'
import React, { FC } from 'react'

import gmStreak from '../../../public/assets/gm-streak.png'

interface IGmStreakIconProps {
  size?: number
  className?: string
}

export const GmStreakIcon: FC<IGmStreakIconProps> = ({ size = 61, className }) => {
  const height = (size * 70) / 61
  return <Image src={gmStreak} alt="gm streak" width={size} height={height} className={className} />
}
