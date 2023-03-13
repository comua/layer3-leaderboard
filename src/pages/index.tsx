import { dehydrate, QueryClient } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

import { Leaderboard } from '../components/leaderboard/Leaderboard'
import { getUsers, useUsers } from '../data/useUsers'

const pageVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
}

const Home: FC = () => {
  const title = 'Home'
  const description = 'Home page'

  const { data, isLoading } = useUsers()

  return (
    <AnimatePresence mode="wait">
      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="relative flex w-[100svw] flex-col items-center bg-background-primary text-white"
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <div className="flex min-h-[15svh] w-full items-end justify-center bg-brand/80 pt-[8rem] tablet:min-h-[20svh] tablet:justify-start tablet:pt-96">
          <motion.h1
            variants={{
              hidden: { y: '250%' },
              visible: { y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
            className="font-accent text-64 font-bold uppercase leading-[0.5] text-background-primary tablet:pl-144 tablet:text-144"
          >
            Leaderboard
          </motion.h1>
        </div>
        {!isLoading && <Leaderboard users={data?.users} />}
      </motion.main>
    </AnimatePresence>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({ queryKey: ['users'], queryFn: getUsers })
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
