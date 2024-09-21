import { createContext, useContext } from 'react'

export function createSafeContext<T>(initialValue?: T) {
  const Context = createContext<T | null>(initialValue ?? null)

  return {
    Provider: Context.Provider,
    Consumer: Context.Consumer,
    useContext: () => {
      const context = useContext(Context)
      if (context === null) {
        throw new Error('useContext must be inside a Provider with a value')
      }
      return context
    },
  }
}
