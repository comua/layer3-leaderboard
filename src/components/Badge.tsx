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
  small = '2.4rem',
  medium = '3.2rem',
  large = '4.8rem',
}

export const Badge: FC<IBadgeProps> = ({
  label,
  value,
  size = BadgeSize.large,
  showLabel = true,
  className,
}) => {
  return (
    <div className="relative flex items-center justify-center font-semibold">
      <BadgeIcon size={size} className={clsx('absolute fill-lightBlue', className)} />
      <div
        className={clsx('absolute flex flex-col items-center justify-center leading-tight', {
          'text-14': size === BadgeSize.large,
          'text-12': [BadgeSize.medium, BadgeSize.small].includes(size),
        })}
      >
        {label && showLabel && <div className="text-8 uppercase">{label}</div>}
        <div>{value}</div>
      </div>
    </div>
  )
}
