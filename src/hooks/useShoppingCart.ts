import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/shoppingCartContext'

function useShoppingCart() {
  const context = useContext(ShoppingCartContext)

  return context
}

export { useShoppingCart }
