import { useRouter } from 'next/router'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

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
    <header className="fixed z-50 flex w-full justify-between p-24 text-14 transition-colors duration-1000 ease-in-out-expo">
      <div className="">
        <NoScrollLink href="/"></NoScrollLink>
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
