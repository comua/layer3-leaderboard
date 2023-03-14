import clsx from 'clsx'
import React, { FC } from 'react'

import { BadgeIcon } from './icons/BadgeIcon'

interface IBadgeProps {
  label?: string
  value: number
  size?: BadgeSize
  showLabel?: boolean
  className?: string
}

export enum BadgeSize {
  Small = '1.6rem',
  Medium = '3.2rem',
  Large = '4.8rem',
}

export const Badge: FC<IBadgeProps> = ({ value, size = BadgeSize.Large, className }) => {
  return (
    <div className="relative flex items-center justify-center font-semibold">
      <BadgeIcon size={size} className={clsxm('absolute fill-lightBlue', className)} />
      <div
        className={clsx('absolute flex flex-col items-center justify-center leading-tight', {
          'text-14': size === BadgeSize.Large,
          'text-12': size === BadgeSize.Medium,
          'text-8': size === BadgeSize.Small,
        })}
      >
        <div>{value}</div>
      </div>
    </div>
  )
}
