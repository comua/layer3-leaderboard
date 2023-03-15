import { dehydrate, QueryClient } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

import { Title } from '../components/core/Title'
import { Leaderboard } from '../components/leaderboard/Leaderboard'
import { getUsers, useUsers } from '../data/useUsers'

const pageVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
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
        className="relative flex w-[100svw] flex-col items-center bg-background-primary pt-48 text-white tablet:pt-80"
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <div className="radial absolute top-0 h-full w-full" />
        <Title>Leaderboard</Title>
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
