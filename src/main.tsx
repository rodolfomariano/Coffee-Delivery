import React from 'react'
import ReactDOM from 'react-dom/client'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import App from './App'

import { ShoppingCartContextProvider } from './contexts/shoppingCartContext'
import { ThemeContextProvider } from './contexts/themeContext'

const checkDevice = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true
  } else {
    return false
  }
}

const isMobile = checkDevice()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ShoppingCartContextProvider>
        {/* <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}> */}
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </ShoppingCartContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
