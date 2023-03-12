import React, { FC } from 'react'

interface ICrownIconProps {
  size?: string | number
  className?: string
}

export const CrownIcon: FC<ICrownIconProps> = ({ size = '2.4rem', className }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <g>
        <path d="M3.2 20h17.7c.7 0 1.2-.5 1.3-1.1l1.4-9.1c.2-1.1-1-1.9-2-1.4l-3.5 2c-.6.3-1.4.2-1.8-.4l-3.2-4.5c-.5-.8-1.7-.8-2.2 0L7.7 10c-.4.6-1.2.7-1.8.4l-3.5-2c-1-.6-2.2.3-2 1.4l1.4 9.1c.1.6.7 1.1 1.4 1.1z"></path>
      </g>
    </svg>
  )
}
