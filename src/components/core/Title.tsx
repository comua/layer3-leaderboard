import { motion } from 'framer-motion'
import React, { FC, PropsWithChildren } from 'react'

const wrapperVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }

const titleVariants = { hidden: { y: '100%' }, visible: { y: 0, transition: { duration: 0.4 } } }

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.h1
      variants={wrapperVariants}
      className="flex w-full justify-center pt-24 font-semibold leading-none tracking-tighter tablet:pt-24"
    >
      <div className="h-48 overflow-hidden font-accent text-48 uppercase tablet:h-96 tablet:text-96">
        <motion.div variants={titleVariants}>{children}</motion.div>
      </div>
    </motion.h1>
  )
}
