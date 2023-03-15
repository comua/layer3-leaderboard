import { motion } from 'framer-motion'
import { FC } from 'react'

import { User } from '../../lib/types'
import { Column } from './Column'
import { RangeSelector } from './controls/RangeSelector'
import { Top3Users } from './top/Top3Users'
import { UserRow } from './user/UserRow'

interface ILeaderboardProps {
  users: User[]
}

const columnVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

const userListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const userVariants = {
  hidden: { opacity: 0, y: '20rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
      mass: 0.9,
      restDelta: 0.01,
    },
  },
}

const COLUMN_HEADERS = ['Rank', 'Avatar', 'Level', '', 'GM Streak', 'Experience']

export const Leaderboard: FC<ILeaderboardProps> = ({ users }) => {
  const hasAtLeast3Users = users?.length >= 3
  const remainingUsers = hasAtLeast3Users ? users.slice(3) : users

  return (
    <div className="relative flex w-full flex-col items-center gap-16 py-16 tablet:gap-24 tablet:py-24">
      <motion.div variants={columnVariants}>
        <RangeSelector />
      </motion.div>
      <div className="w-full px-16">
        <Top3Users users={users} />
      </div>
      <div className="w-full px-16 tablet:w-2/3">
        <motion.div
          variants={columnVariants}
          className="grid-leaderboard mt-12 hidden px-24 pb-16 tablet:grid"
        >
          {COLUMN_HEADERS.map((header) => {
            return (
              <Column key={header} center className="font-semibold uppercase text-white/30">
                {header}
              </Column>
            )
          })}
        </motion.div>
        <motion.div variants={userListVariants}>
          {remainingUsers?.map((user) => {
            return (
              <motion.div variants={userVariants} key={user.address}>
                <UserRow user={user} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
