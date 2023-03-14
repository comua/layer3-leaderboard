import { motion } from 'framer-motion'
import React, { FC } from 'react'

import { User } from '../../../lib/types'
import { TopUserCard } from './TopUserCard'

interface ITop3UsersProps {
  users: User[]
}

const topVariants = {
  hidden: { opacity: 0, y: '-10rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      type: 'spring',
      damping: 10,
      stiffness: 90,
      mass: 0.9,
      restDelta: 0.01,
    },
  },
}

const runnerUpVariants = {
  hidden: { opacity: 0, y: '-10rem' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 0.5,
      type: 'spring',
      damping: 10,
      stiffness: 90,
      mass: 0.7,
      restDelta: 0.01,
    },
  },
}

export const Top3Users: FC<ITop3UsersProps> = ({ users }) => {
  if (!users?.length) {
    return null
  }

  const hasAtLeast3Users = users.length >= 3

  return (
    <div className="mt-16 flex w-full items-center justify-between mobile:justify-center mobile:gap-96 tablet:px-0 tablet:pt-16">
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
    </div>
  )
}
