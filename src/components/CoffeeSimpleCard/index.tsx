import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { coinFormat } from '../../utils/coinFormat'

import {
  CoffeeSimpleCardContainer,
  AddCoffee,
  AmountContent,
  CoffeeSimpleCardContent,
  RemoveCoffee,
} from './styles'

interface CoffeeSimpleCardProps {
  id: string
  title: string
  image: string
  amount: number
  price: number
}

interface Coffee {
  id: string
  image: string
  title: string
  price: number
  amount: number
}

export function CoffeeSimpleCard({
  id,
  title,
  image,
  amount,
  price,
}: CoffeeSimpleCardProps) {
  const [amountOfCoffee, setAmountOfCoffee] = useState(amount)

  const {
    removeOneItemInShoppingCart,
    addOneItemInShoppingCart,
    removeItemFromShoppingCart,
  } = useShoppingCart()

  function handleRemoveOneItemInShoppingCart(data: Coffee) {
    removeOneItemInShoppingCart(data)

    if (amountOfCoffee !== 1) {
      setAmountOfCoffee(amount - 1)
    }
  }

  function handleAddItemInShoppingCart(data: Coffee) {
    addOneItemInShoppingCart(data)

    setAmountOfCoffee(amount + 1)
  }

  return (
    <CoffeeSimpleCardContainer>
      <img src={image} alt="" />

      <CoffeeSimpleCardContent>
        <strong>{title}</strong>

        <div>
          <AmountContent>
            <RemoveCoffee
              onClick={() =>
                handleRemoveOneItemInShoppingCart({
                  id,
                  title,
                  price,
                  image,
                  amount: amountOfCoffee,
                })
              }
            >
              <Minus />
            </RemoveCoffee>
            <span>{amountOfCoffee}</span>
            <AddCoffee
              onClick={() =>
                handleAddItemInShoppingCart({
                  id,
                  title,
                  price,
                  image,
                  amount: amountOfCoffee,
                })
              }
            >
              <Plus />
            </AddCoffee>
          </AmountContent>
          <button onClick={() => removeItemFromShoppingCart(title)}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </CoffeeSimpleCardContent>

      <strong>{coinFormat(amount * price)}</strong>
    </CoffeeSimpleCardContainer>
  )
}
