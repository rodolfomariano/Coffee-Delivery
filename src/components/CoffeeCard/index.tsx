import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { useDrag } from 'react-dnd'

import { useShoppingCart } from '../../hooks/useShoppingCart'

import {
  ActionContainer,
  AddCoffee,
  CoffeeDescription,
  CoffeeTitle,
  CoffeeTypeContainer,
  Container,
  AmountContent,
  RemoveCoffee,
  ShoppingCartButton,
} from './styles'

interface CoffeeCardProps {
  id: string
  image: string
  title: string
  type: string[]
  description: string
  price: number
}

interface Coffee {
  id: string
  image: string
  title: string
  price: number
  amount: number
}

export function CoffeeCard({
  id,
  title,
  type,
  description,
  price,
  image,
}: CoffeeCardProps) {
  const [amountOfCoffee, setAmountOfCoffee] = useState(1)

  const {
    addItemInShoppingCart,
    setCardIsInDragging,
    setDropContainerIsHover,
  } = useShoppingCart()

  const [, dragRef] = useDrag(
    // @ts-ignore
    () => ({
      type: 'CARD',
      item: { type: 'CARD', id },
      collect: (monitor) => ({
        opacity: monitor.isDragging(),
      }),
      end: () => {
        setCardIsInDragging(false)
        setDropContainerIsHover(false)
      },
      isDragging: () => {
        setCardIsInDragging(true)
      },
    }),
    [],
  )

  function handleAddAmountOfCoffee() {
    setAmountOfCoffee(amountOfCoffee + 1)
  }

  function handleRemoveAmountOfCoffee() {
    setAmountOfCoffee(amountOfCoffee - 1)
  }

  function handleAddItemInShoppingCart(data: Coffee) {
    addItemInShoppingCart(data)

    setAmountOfCoffee(1)
  }

  return (
    <Container ref={dragRef}>
      <img src={image} alt="" />

      <CoffeeTypeContainer>
        {type.map((type) => (
          <span key={type}>{type}</span>
        ))}
      </CoffeeTypeContainer>

      <CoffeeTitle>{title}</CoffeeTitle>

      <CoffeeDescription>{description}</CoffeeDescription>

      <ActionContainer>
        <span>
          R${' '}
          <strong>
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </strong>
        </span>

        <div>
          <AmountContent>
            <RemoveCoffee
              onClick={handleRemoveAmountOfCoffee}
              disabled={amountOfCoffee === 1}
            >
              <Minus />
            </RemoveCoffee>
            <span>{amountOfCoffee}</span>
            <AddCoffee onClick={handleAddAmountOfCoffee}>
              <Plus />
            </AddCoffee>
          </AmountContent>

          <ShoppingCartButton
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
            <ShoppingCartSimple size={22} weight="fill" />
          </ShoppingCartButton>
        </div>
      </ActionContainer>
    </Container>
  )
}
