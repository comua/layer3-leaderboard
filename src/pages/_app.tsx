import '../css/app.css'

import { Inter } from '@next/font/google'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { AppReveal } from '../components/AppReveal'
import { Layout } from '../components/Layout'
import { DefaultMeta } from '../components/seo/DefaultMeta'
import { IsAppReadyProvider } from '../context/isAppReady'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Wait for font to load
})

const queryClient = new QueryClient({
  defaultOptions: {},
})

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${router.route}`

  return (
    <div className={`relative flex font-body ${inter.variable}`}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <IsAppReadyProvider>
            <DefaultMeta canonical={url} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <AppReveal />
          </IsAppReadyProvider>
        </Hydrate>
      </QueryClientProvider>
    </div>
  )
}

export default App
