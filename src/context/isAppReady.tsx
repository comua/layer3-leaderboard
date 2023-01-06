import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'

const Context = createContext([])

export const IsAppReadyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAppReady, setIsAppReady] = useState(false)
  return <Context.Provider value={[isAppReady, setIsAppReady]}>{children}</Context.Provider>
}

export const useIsAppReadyContext = () => {
  return useContext(Context)
}
