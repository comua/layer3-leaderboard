import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { LogoIcon } from '../icons/LogoIcon'
import { NoScrollLink } from './NoScrollLink'

const NAV_MAP = [{ label: '', path: '/' }]

export const SiteHeader: FC = () => {
  const router = useRouter()

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
                <li
                  key={navItem.path}
                  className={clsx(
                    'mr-24 opacity-50 transition-opacity duration-200 last:mr-0 hover:opacity-100 focus:opacity-100',
                    { 'opacity-100': navItem.path === router.asPath }
                  )}
                >
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
