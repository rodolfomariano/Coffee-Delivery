import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ActionTypes } from '../reducers/shoppingCart/actions'
import { shoppingCartReducer } from '../reducers/shoppingCart/reducer'

interface Coffee {
  id: string
  image: string
  title: string
  price: number
  amount: number
}

interface ShoppingCartContextProps {
  shoppingCart: Coffee[]
  subTotal: number
  cardIsInDragging: boolean
  dropContainerIsHover: boolean
  addItemInShoppingCart: (data: Coffee) => void
  removeOneItemInShoppingCart: (data: Coffee) => void
  addOneItemInShoppingCart: (data: Coffee) => void
  removeItemFromShoppingCart: (title: string) => void
  subTotalCalc: () => void
  getItemDroppedAndAddInCart: (id: string) => void
  setCardIsInDragging: (status: boolean) => void
  setDropContainerIsHover: (status: boolean) => void
}

interface ShoppingCartContextProviderProps {
  children: ReactNode
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, [], () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:shopping-cart-v1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  const [subTotal, setSubTotal] = useState(0)

  const [cardIsInDragging, setCardIsInDragging] = useState(false)
  const [dropContainerIsHover, setDropContainerIsHover] = useState(false)

  function addItemInShoppingCart(data: Coffee) {
    const item = shoppingCart.filter(
      (item: Coffee) => item.title === data.title,
    )

    if (item[0]) {
      return dispatch({
        type: ActionTypes.ADD_ITEM_IF_ALREADY_EXISTS_THIS_IN_CART,
        data,
      })
    }

    const newCoffee = {
      id: data.id,
      title: data.title,
      image: data.image,
      price: data.price,
      amount: data.amount,
    }

    dispatch({
      type: ActionTypes.ADD_NEW_ITEM_IN_CART,
      payload: {
        newCoffee,
      },
    })
  }

  function removeOneItemInShoppingCart(data: Coffee) {
    if (data.amount === 1) {
      return removeItemFromShoppingCart(data.title)
    }

    const item = shoppingCart.filter(
      (item: Coffee) => item.title === data.title,
    )

    if (item[0]) {
      dispatch({
        type: ActionTypes.REMOVE_ONE_AMOUNT_OF_ITEM,
        data,
      })
    }
  }

  function addOneItemInShoppingCart(data: Coffee) {
    const item = shoppingCart.filter(
      (item: Coffee) => item.title === data.title,
    )

    if (item[0]) {
      dispatch({
        type: ActionTypes.ADD_ONE_AMOUNT_OF_ITEM,
        data,
      })
    }
  }

  function removeItemFromShoppingCart(title: string) {
    const confirmationToRemove = confirm('Quer mesmo remover o item?')

    if (confirmationToRemove === true) {
      dispatch({
        type: ActionTypes.REMOVE_ITEM_OF_CART,
        title,
      })
    }
  }

  function subTotalCalc() {
    const calc = shoppingCart.reduce((sumTotal, product) => {
      return (sumTotal += product.amount * product.price)
    }, 0)

    setSubTotal(calc)

    return calc
  }

  function getItemDroppedAndAddInCart(id: string) {
    dispatch({
      type: ActionTypes.ADD_ITEM_ON_DROP,
      id,
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCart)

    localStorage.setItem('@coffee-delivery:shopping-cart-v1.0.0', stateJSON)
  }, [shoppingCart])

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        subTotal,
        cardIsInDragging,
        dropContainerIsHover,
        addItemInShoppingCart,
        removeOneItemInShoppingCart,
        addOneItemInShoppingCart,
        removeItemFromShoppingCart,
        subTotalCalc,
        getItemDroppedAndAddInCart,
        setCardIsInDragging,
        setDropContainerIsHover,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
