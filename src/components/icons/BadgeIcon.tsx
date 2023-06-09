import React, { FC } from 'react'

interface IBadgeIconProps {
  size?: string | number
  className?: string
}

export const BadgeIcon: FC<IBadgeIconProps> = ({ size = '4.8rem', className }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className}>
      <path d="M0 47.4235C0 38.0237 6.53608 29.9057 15.7703 28.1488C36.4827 24.2081 73.3424 18 100 18C126.658 18 163.517 24.2081 184.23 28.1488C193.464 29.9057 200 38.0237 200 47.4235V150.374C200 159.424 193.931 167.333 185.12 169.396C164.683 174.181 127.351 181.934 100 181.934C72.6487 181.934 35.3172 174.181 14.8798 169.396C6.06883 167.333 0 159.424 0 150.374V47.4235Z" />
    </svg>
  )
}
