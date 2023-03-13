import { motion } from 'framer-motion'
import { FC } from 'react'

import { User } from '../../lib/types'
import { Column } from './Column'
import { Top3Users } from './Top3Users'
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

const userVariants = {
  hidden: { opacity: 0, y: '20rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: 'spring',
      damping: 10,
      stiffness: 90,
      mass: 0.7,
      restDelta: 0.01,
    },
  },
}

const COLUMN_HEADERS = ['Rank', 'Avatar', 'Level', '', 'GM Streak', 'Experience']

export const Leaderboard: FC<ILeaderboardProps> = ({ users }) => {
  const hasAtLeast3Users = users?.length >= 3
  const remainingUsers = hasAtLeast3Users ? users.slice(3) : users

  return (
    <motion.div variants={leaderboardVariants} className="flex w-full flex-col items-center gap-24">
      <Top3Users users={users} />
      <div className="w-full px-16 pb-24 tablet:w-2/3">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          }}
          className="grid-leaderboard hidden px-24 pb-12 tablet:grid"
        >
          {COLUMN_HEADERS.map((header) => {
            return (
              <Column key={header} center className="font-semibold uppercase text-grey-9">
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
