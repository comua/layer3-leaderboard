import { AnimatePresence } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

const Home: FC = () => {
  const title = 'Home'
  const description = 'Home page'

  return (
    <AnimatePresence>
      <main
        className={`relative flex h-[100svh] w-[100svw] flex-col items-center justify-center bg-black px-24 pt-48 pb-24 text-white`}
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <h1>Hello, World!</h1>
      </main>
    </AnimatePresence>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Home
