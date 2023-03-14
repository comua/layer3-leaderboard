import React, { FC, PropsWithChildren } from 'react'

import { clsxm } from '../../lib/clsxm'

interface IColumnProps {
  className?: string
  center?: boolean
  end?: boolean
}

export const Column: FC<PropsWithChildren<IColumnProps>> = ({
  children,
  className,
  center,
  end,
}) => {
  return (
    <div className={clsxm('flex', { 'justify-center': center, 'justify-end': end }, className)}>
      {children}
    </div>
  )
}
