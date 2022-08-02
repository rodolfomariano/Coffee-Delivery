import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ShoppingCartContextProvider } from './contexts/shoppingCartContext'
import { ThemeContextProvider } from './contexts/themeContext'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ShoppingCartContextProvider>
        <App />
      </ShoppingCartContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
