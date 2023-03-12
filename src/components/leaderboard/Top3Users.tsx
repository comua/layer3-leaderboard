import { AnimatePresence, motion } from 'framer-motion'
import React, { FC } from 'react'

import { User } from '../../lib/types'
import { TopUserCard } from './TopUserCard'

interface ITop3UsersProps {
  users: User[]
}

const topVariants = {
  hidden: { opacity: 0, y: '-20rem' },
  visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3, type: 'spring' } },
}

const runnerUpVariants = {
  hidden: { opacity: 0, y: '-10rem' },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } },
}

export const Top3Users: FC<ITop3UsersProps> = ({ users }) => {
  if (users?.length < 1) {
    return null
  }

  const hasAtLeast3Users = users.length >= 3

  return (
    <AnimatePresence>
      <motion.div className="my-16 flex w-full items-center justify-center gap-16 rounded bg-background-secondary py-16 tablet:gap-32">
        {hasAtLeast3Users && (
          <motion.div variants={runnerUpVariants}>
            <TopUserCard user={users[1]} />
          </motion.div>
        )}
        <motion.div variants={topVariants}>
          <TopUserCard user={users[0]} />
        </motion.div>
        {hasAtLeast3Users && (
          <motion.div variants={runnerUpVariants}>
            <TopUserCard user={users[2]} />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
