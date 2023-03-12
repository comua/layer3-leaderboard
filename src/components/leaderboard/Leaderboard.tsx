import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import { User } from '../../lib/types'
import { RangeSelector } from './controls/RangeSelector'
import { Top3Users } from './Top3Users'
import { UserRow } from './user/UserRow'

interface ILeaderboardProps {
  users: User[]
}

const leaderboardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delayChildren: 0.3, staggerChildren: 0.1 },
  },
}
const userVariants = { hidden: { opacity: 0, y: '20rem' }, visible: { opacity: 1, y: 0 } }

export const Leaderboard: FC<ILeaderboardProps> = ({ users }) => {
  const hasAtLeast3Users = users?.length >= 3
  const remainingUsers = hasAtLeast3Users ? users.slice(3) : users

  return (
    <AnimatePresence>
      <motion.div variants={leaderboardVariants} className="gap-24">
        <RangeSelector />
        <Top3Users users={users} />
        <div>
          {remainingUsers.map((user) => {
            return (
              <motion.div variants={userVariants} key={user.address}>
                <UserRow user={user} />
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
