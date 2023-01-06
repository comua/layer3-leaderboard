import gsap from 'gsap'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'

const EASING = 'power4.inOut'
const DURATION = {
  in: 1,
  out: 1,
  dim: 0.2,
}

export const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const prevPathRef = useRef<string>()

  useEffect(() => {
    prevPathRef.current = router.asPath
  }, [router.asPath])

  const onPageEnter = (node: gsap.TweenTarget) => {
    gsap.fromTo(node, { autoAlpha: 0 }, { autoAlpha: 1, ease: EASING })
  }

  const onPageExit = (node: gsap.TweenTarget) => {
    gsap.fromTo(node, { autoAlpha: 1 }, { autoAlpha: 0, ease: EASING })
  }

  return (
    <TransitionGroup className="relative">
      <Transition
        key={router.asPath}
        timeout={DURATION.out * 1000}
        in={true}
        onEnter={onPageEnter}
        onExit={onPageExit}
        mountOnEnter={true}
        unmountOnExit={true}
        className="absolute w-[100svw]"
      >
        {children}
      </Transition>
    </TransitionGroup>
  )
}
