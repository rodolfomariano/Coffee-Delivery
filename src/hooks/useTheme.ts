import { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

function useTheme() {
  const context = useContext(ThemeContext)

  return context
}

export { useTheme }
