import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import { User } from '../../lib/types'
import { LevelBadge } from '../user/LevelBadge'
import { UserAddress } from '../user/UserAddress'
import { UserAvatar } from '../user/UserAvatar'
import { UserExperience } from '../user/UserExperience'
import { Top3Users } from './Top3Users'

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
      <motion.div variants={leaderboardVariants}>
        <div className="flex justify-center">
          <div className="mb-24 flex gap-16">
            <div>All Time</div>
            <div>This Month</div>
            <div>This Week</div>
            <div>Today</div>
          </div>
        </div>
        <div className="mb-48">
          <Top3Users users={users} />
        </div>
        <div>
          {remainingUsers.map((user) => {
            return (
              <motion.div variants={userVariants} key={user.address}>
                <button className="leaderboard-grid mb-8 w-full cursor-pointer rounded py-12 px-24 font-bold transition-all duration-100 hover:bg-background-tertiary tablet:py-16">
                  <div className="flex justify-start">{user.rank}</div>
                  <div className="relative flex justify-center">
                    <div className="absolute bottom-0 mobile:hidden">
                      <LevelBadge level={user.level} size="2.4rem" showLabel={false} />
                    </div>
                    <UserAvatar
                      avatarCid={user.avatarCid}
                      className="aspect-square w-48 rounded-sm tablet:w-64"
                    />
                  </div>
                  <UserAddress username={user.username} address={user.address} />
                  <div className="hidden mobile:block">
                    <LevelBadge level={user.level} />
                  </div>
                  <div className="flex justify-end">
                    <div>
                      {user.gmStreak}{' '}
                      <span className="font-bold text-grey-7">
                        GM<span className="hidden tablet:inline"> Streak</span>
                      </span>
                    </div>
                  </div>
                  <UserExperience xp={user.xp} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
