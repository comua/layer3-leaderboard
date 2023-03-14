import React, { FC } from 'react'

interface ITopUserStatProps {
  value: number
  label: string
}

export const TopUserStat: FC<ITopUserStatProps> = ({ value, label }) => {
  return (
    <div>
      <div className="font-medium leading-none tablet:text-24">{value}</div>
      <div className="text-8 font-medium uppercase text-white/30 tablet:text-12">{label}</div>
    </div>
  )
}
