import { motion } from 'framer-motion'
import { FC } from 'react'

import { User } from '../../lib/types'
import { Column } from './Column'
import { RangeSelector } from './controls/RangeSelector'
import { Title } from './Title'
import { Top3Users } from './top/Top3Users'
import { UserRow } from './user/UserRow'

interface ILeaderboardProps {
  users: User[]
}

const leaderboardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delayChildren: 0.3, staggerChildren: 0.15 },
  },
}

const columnVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
}

const userVariants = {
  hidden: { opacity: 0, y: '20rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
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
    <motion.div
      variants={leaderboardVariants}
      className="relative flex w-full flex-col items-center gap-24"
    >
      <div className="radial absolute top-0 h-full w-full" />
      <Title />
      <motion.div variants={columnVariants}>
        <RangeSelector />
      </motion.div>
      <div className="w-full px-16">
        <Top3Users users={users} />
      </div>
      <div className="w-full px-16 pb-24 tablet:w-2/3">
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
        {remainingUsers?.map((user) => {
          return (
            <motion.div variants={userVariants} key={user.address}>
              <UserRow user={user} />
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
