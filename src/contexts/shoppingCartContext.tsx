import { createContext, ReactNode, useState } from 'react'

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
  setShoppingCart: (data: Coffee[]) => void
  addItemInShoppingCart: (data: Coffee) => void
  removeOneItemInShoppingCart: (data: Coffee) => void
  addOneItemInShoppingCart: (data: Coffee) => void
  removeItemFromShoppingCart: (title: string) => void
  subTotalCalc: () => void
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
    return console.log('epa')
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
    return console.log('epa')
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

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        subTotal,
        setShoppingCart,
        addItemInShoppingCart,
        removeOneItemInShoppingCart,
        addOneItemInShoppingCart,
        removeItemFromShoppingCart,
        subTotalCalc,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
