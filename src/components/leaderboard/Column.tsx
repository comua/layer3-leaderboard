import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

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
    <div className={clsx('flex', { 'justify-center': center, 'justify-end': end }, className)}>
      {children}
    </div>
  )
}
