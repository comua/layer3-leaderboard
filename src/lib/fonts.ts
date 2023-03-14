import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

export const INTER = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Wait for font to load
})

export const TUNGSTEN = localFont({
  variable: '--font-tungsten',
  display: 'swap', // Wait for font to load
  src: [
    {
      path: '../../public/fonts/Tungsten-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tungsten-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tungsten-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tungsten-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Tungsten-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})
