import { FC, PropsWithChildren } from 'react'

import { PageTransition } from './animation/PageTransition'
import { SiteHeader } from './navigation/SiteHeader'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <SiteHeader />
      <PageTransition>
        <div id="main">{children}</div>
      </PageTransition>
    </div>
  )
}
