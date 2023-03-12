import { useRouter } from 'next/router'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { LogoIcon } from '../icons/LogoIcon'
import { NoScrollLink } from './NoScrollLink'

const NAV_MAP = [{ label: '', path: '/' }]

export const SiteHeader: FC = () => {
  const router = useRouter()

  const getClasses = (path) => {
    return twMerge(
      'mr-24 last:mr-0 opacity-50 hover:opacity-100 transition-opacity duration-200 focus:opacity-100',
      path === router.asPath && 'opacity-100'
    )
  }

  return (
    <header className="fixed z-50 flex w-full justify-between border-b-sm border-border bg-background-primary p-16 text-14 tablet:py-24 tablet:px-48">
      <div className="">
        <NoScrollLink href="/">
          <LogoIcon />
        </NoScrollLink>
      </div>
      <div className="">
        <nav>
          <ul className="flex">
            {NAV_MAP.map((navItem) => {
              return (
                <li key={navItem.path} className={getClasses(navItem.path)}>
                  <NoScrollLink href={navItem.path} shallow>
                    {navItem.label}
                  </NoScrollLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
