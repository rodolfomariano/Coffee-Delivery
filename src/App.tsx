import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyles } from './styles/global'
import { darkTheme, defaultTheme } from './styles/themes/default'

import { Router } from './Router'

import { useTheme } from './hooks/useTheme'

function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider
      theme={
        theme === undefined || theme === 'light' ? defaultTheme : darkTheme
      }
    >
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      {/* <ToastContainer /> */}
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
