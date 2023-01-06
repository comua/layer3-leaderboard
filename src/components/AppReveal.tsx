import { gsap } from 'gsap'
import { FC, useCallback, useEffect, useRef } from 'react'
import { Transition } from 'react-transition-group'

import { useIsAppReadyContext } from '../context/isAppReady'

export const AppReveal: FC = () => {
  const nodeRef = useRef(null)
  const [isAppReady, setIsAppReady] = useIsAppReadyContext()
  const duration = 0.25

  const hideAppReveal = useCallback(() => {
    setIsAppReady(true)
    window.removeEventListener('load', hideAppReveal)
  }, [setIsAppReady])

  useEffect(() => {
    if (!isAppReady)
      if (document.readyState !== 'complete') window.addEventListener('load', hideAppReveal)
      else hideAppReveal()
  }, [isAppReady, hideAppReveal])

  const onExit = () => {
    gsap.to(nodeRef.current, { autoAlpha: 0, duration: duration, ease: 'none' })
  }

  return (
    <Transition
      nodeRef={nodeRef}
      in={!isAppReady}
      timeout={duration * 1000}
      onExit={onExit}
      unmountOnExit={true}
    >
      <div ref={nodeRef} className="fixed inset-0 flex items-center justify-center bg-black" />
    </Transition>
  )
}
