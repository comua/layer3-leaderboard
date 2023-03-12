import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import { User } from '../../lib/types'
import { BadgeIcon } from '../icons/BadgeIcon'

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
const userVariants = { hidden: { opacity: 0, y: '10rem' }, visible: { opacity: 1, y: 0 } }

export const Leaderboard: FC<ILeaderboardProps> = ({ users }) => {
  return (
    <AnimatePresence>
      <motion.div variants={leaderboardVariants}>
        <div className="mb-48 flex justify-center">
          <div className="flex gap-16">
            <div>All Time</div>
            <div>This Month</div>
            <div>This Week</div>
            <div>Today</div>
          </div>
        </div>
        <div>
          {users.map((user) => {
            return (
              <motion.div variants={userVariants} key={user.address}>
                <button className="leaderboard-grid mb-8 w-full cursor-pointer rounded py-12 px-24 font-bold hover:bg-background-tertiary tablet:py-16">
                  <div className="flex justify-start">{user.rank}</div>
                  <Image
                    src={`https://gateway.pinata.cloud/ipfs/${user.avatarCid}`}
                    alt="avatar"
                    width={100}
                    height={100}
                    className="aspect-square w-48 rounded-sm tablet:w-64"
                  />
                  <div className="flex justify-start font-bold">
                    <span>{user.username.replace('.eth', '')}</span>
                    <span className="text-grey-7">.eth</span>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <BadgeIcon
                      size="6.4rem"
                      className="absolute fill-transparent stroke-lightBlue stroke-[0.4rem]"
                    />
                    <BadgeIcon size="4.8rem" className="absolute fill-lightBlue" />
                    <div className="absolute flex flex-col items-center justify-center text-12 font-bold leading-tight">
                      <div className="text-8 uppercase">Level</div>
                      <div>{user.level}</div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div>
                      {user.gmStreak} <span className="font-bold text-grey-7">GM Streak</span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div>
                      {user.xp} <span className="font-bold text-grey-7">XP</span>
                    </div>
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
