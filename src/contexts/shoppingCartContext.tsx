import { createContext, ReactNode, useState } from 'react'
import { coffeeList } from '../utils/coffeeList'

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
  setShoppingCart: (data: Coffee[]) => void
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
  const [shoppingCart, setShoppingCart] = useState<Coffee[]>([])
  const [subTotal, setSubTotal] = useState(0)

  const [cardIsInDragging, setCardIsInDragging] = useState(false)
  const [dropContainerIsHover, setDropContainerIsHover] = useState(false)

  function addItemInShoppingCart(data: Coffee) {
    const item = shoppingCart.filter(
      (item: Coffee) => item.title === data.title,
    )

    const shoppingCartWithoutTheItem = shoppingCart.filter(
      (item: Coffee) => item.title !== data.title,
    )

    if (item[0]) {
      return setShoppingCart([
        ...shoppingCartWithoutTheItem,
        {
          id: data.id,
          title: data.title,
          image: data.image,
          price: data.price,
          amount: item[0].amount + data.amount,
        },
      ])
    }

    return setShoppingCart([
      ...shoppingCart,
      {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        amount: data.amount,
      },
    ])
  }

  function removeOneItemInShoppingCart(data: Coffee) {
    if (data.amount === 1) {
      return removeItemFromShoppingCart(data.title)
    }

    const item = shoppingCart.filter(
      (item: Coffee) => item.title === data.title,
    )
    const shoppingCartWithoutTheItem = shoppingCart.filter(
      (item: Coffee) => item.title !== data.title,
    )
    if (item[0]) {
      return setShoppingCart([
        ...shoppingCartWithoutTheItem,
        {
          id: data.id,
          title: data.title,
          image: data.image,
          price: data.price,
          amount: item[0].amount - 1,
        },
      ])
    }
  }

  function addOneItemInShoppingCart(data: Coffee) {
    const item = shoppingCart.filter(
      (item: Coffee) => item.title === data.title,
    )
    const shoppingCartWithoutTheItem = shoppingCart.filter(
      (item: Coffee) => item.title !== data.title,
    )
    if (item[0]) {
      return setShoppingCart([
        ...shoppingCartWithoutTheItem,
        {
          id: data.id,
          title: data.title,
          image: data.image,
          price: data.price,
          amount: item[0].amount + 1,
        },
      ])
    }
  }

  function removeItemFromShoppingCart(title: string) {
    const shoppingCartWithoutTheItem = shoppingCart.filter(
      (item: Coffee) => item.title !== title,
    )
    setShoppingCart([...shoppingCartWithoutTheItem])
  }

  function subTotalCalc() {
    const calc = shoppingCart.reduce((sumTotal, product) => {
      return (sumTotal += product.amount * product.price)
    }, 0)

    setSubTotal(calc)

    return calc
  }

  function getItemDroppedAndAddInCart(id: string) {
    const coffeeData = coffeeList.filter((item) => item.id === id)
    const coffeeToAdd = coffeeData[0]

    const item = shoppingCart.filter(
      (item: Coffee) => item.title === coffeeToAdd.title,
    )
    const shoppingCartWithoutTheItem = shoppingCart.filter(
      (item: Coffee) => item.title !== coffeeToAdd.title,
    )

    if (item[0]) {
      return setShoppingCart([
        ...shoppingCartWithoutTheItem,
        {
          id: coffeeToAdd.id,
          title: coffeeToAdd.title,
          image: coffeeToAdd.coffeeImage,
          price: coffeeToAdd.price,
          amount: item[0].amount + 1,
        },
      ])
    }

    return setShoppingCart([
      ...shoppingCartWithoutTheItem,
      {
        id: coffeeToAdd.id,
        title: coffeeToAdd.title,
        image: coffeeToAdd.coffeeImage,
        price: coffeeToAdd.price,
        amount: coffeeToAdd.amountInTheCart + 1,
      },
    ])
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        subTotal,
        cardIsInDragging,
        dropContainerIsHover,
        setShoppingCart,
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
