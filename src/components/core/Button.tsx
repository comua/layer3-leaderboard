import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

interface IButtonProps {
  className?: string
  isSelected?: boolean
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
  children,
  className,
  isSelected,
}) => {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded-full border-sm border-white/5 py-4 px-8 font-semibold transition-[background] duration-100 tablet:py-8 tablet:px-16',
        {
          'bg-white/20': isSelected,
          'bg-white/5 hover:bg-white/10': !isSelected,
        },
        className
      )}
    >
      {children}
    </button>
  )
}
