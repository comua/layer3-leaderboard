import { AnimatePresence, motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

import { Leaderboard } from '../components/leaderboard/Leaderboard'
// import { useUsers } from '../data/useUsers'
import { MOCK_USER_DATA } from '../lib/constants'

const pageVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const Home: FC = () => {
  const title = 'Home'
  const description = 'Home page'

  // const { data, isLoading } = useUsers()

  return (
    <AnimatePresence>
      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className={`relative flex w-[100svw] flex-col items-center bg-background-primary px-16 pt-[8rem] pb-24 text-white tablet:px-48 tablet:pt-96`}
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <h1 className="mb-24 text-24">Leaderboard</h1>
        <Leaderboard users={MOCK_USER_DATA.users} />
      </motion.main>
    </AnimatePresence>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Home
