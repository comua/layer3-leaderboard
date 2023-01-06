import Link, { LinkProps } from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface INoScrollLinkProps extends LinkProps {
  className?: string
}

export const NoScrollLink: FC<PropsWithChildren<INoScrollLinkProps>> = ({
  children,
  href,
  passHref,
  className,
  shallow,
}) => (
  <Link href={href} passHref={passHref} scroll={false} className={className} shallow={shallow}>
    {children}
  </Link>
)
