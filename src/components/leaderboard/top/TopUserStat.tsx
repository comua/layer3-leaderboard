import React, { FC } from 'react'

interface ITopUserStatProps {
  value: number
  label: string
}

export const TopUserStat: FC<ITopUserStatProps> = ({ value, label }) => {
  return (
    <div>
      <div className="leading-none tablet:text-24">{value}</div>
      <div className="text-8 uppercase text-grey-9 tablet:text-12">{label}</div>
    </div>
  )
}
