import React, { FC, PropsWithChildren } from 'react'

import { clsxm } from '../../../lib/clsxm'

interface IRangeItemProps {
  isSelected?: boolean
}

export const RangeItem: FC<PropsWithChildren<IRangeItemProps>> = ({ children, isSelected }) => {
  return (
    <button
      className={clsxm(
        'cursor-pointer rounded-full py-8 px-16 transition-[background] duration-100',
        {
          'bg-white text-black': isSelected,
          'hover:bg-background-tertiary': !isSelected,
        }
      )}
    >
      {children}
    </button>
  )
}
