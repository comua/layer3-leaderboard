import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

interface IRangeItemProps {
  isSelected?: boolean
}

export const RangeItem: FC<PropsWithChildren<IRangeItemProps>> = ({ children, isSelected }) => {
  return (
    <button
      className={clsx(
        'cursor-pointer rounded-full border-sm border-white/5 py-8 px-16 font-semibold transition-[background] duration-100',
        {
          'bg-white/20': isSelected,
          'bg-white/5 hover:bg-white/10': !isSelected,
        }
      )}
    >
      {children}
    </button>
  )
}
