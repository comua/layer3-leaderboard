import clsx from 'clsx'
import React, { FC } from 'react'

import { CrownIcon } from '../../icons/CrownIcon'

interface ITopUserRankProps {
  rank: number
}

export const TopUserRank: FC<ITopUserRankProps> = ({ rank }) => {
  return (
    <div>
      {rank > 1 ? (
        <div
          className={clsx(
            'mt-8 flex aspect-square w-24 items-center justify-center rounded-full font-accent text-12 font-semibold',
            {
              'glow-silver bg-slate-300 text-slate-600': rank === 2,
              'glow-bronze bg-amber-500 text-amber-800': rank === 3,
            }
          )}
        >
          {rank}
        </div>
      ) : (
        <CrownIcon size="4.8rem" className="glow-gold animate-bounce fill-amber-300" />
      )}
    </div>
  )
}
