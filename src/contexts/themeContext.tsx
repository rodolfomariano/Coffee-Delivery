import { createContext, ReactNode, useState } from 'react'

interface ThemeContextProps {
  theme: 'light' | 'dark' | undefined
  alterTheme: (theme: 'light' | 'dark') => void
}

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>(() => {
    const storageStateAsJSON = localStorage.getItem(
      '@rms-coffee-delivery:theme-1.0.0',
    ) as 'light' | 'dark'

    if (storageStateAsJSON) {
      return storageStateAsJSON
    } else {
      return 'light'
    }
  })

  function alterTheme(theme: 'light' | 'dark') {
    localStorage.setItem('@rms-coffee-delivery:theme-1.0.0', theme)

    setTheme(theme)
  }

  // useEffect(() => {
  //   const storageStateAsJSON = localStorage.getItem(
  //     '@rms-coffee-delivery:theme-1.0.0',
  //   ) as 'light' | 'dark'
  //   if (storageStateAsJSON) {
  //     setTheme(storageStateAsJSON)
  //   } else {
  //     setTheme('light')
  //   }
  // }, [])

  return (
    <ThemeContext.Provider value={{ theme, alterTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
