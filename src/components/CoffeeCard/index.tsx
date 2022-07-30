import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'

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
  image: string
  title: string
  type: string[]
  description: string
  price: number
}

// interface Coffee {
//   image: string
//   title: string
//   type: string[]
//   description: string
//   price: number
// }

export function CoffeeCard({
  title,
  type,
  description,
  price,
  image,
}: CoffeeCardProps) {
  const [amountOfCoffee, setAmountOfCoffee] = useState(0)
  // const [toAddInTheShoppingCart, setToAddInTheShoppingCart] = useState<
  //   Coffee[]
  // >([])

  // console.log(toAddInTheShoppingCart)

  function handleAddCoffee() {
    setAmountOfCoffee(amountOfCoffee + 1)
    // setToAddInTheShoppingCart((state) => [
    //   ...state,
    //   {
    //     title,
    //     type,
    //     description,
    //     price,
    //     image,
    //   },
    // ])
  }

  function handleRemoveCoffee() {
    setAmountOfCoffee(amountOfCoffee - 1)
  }

  return (
    <Container>
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
              onClick={handleRemoveCoffee}
              disabled={amountOfCoffee === 0}
            >
              <Minus />
            </RemoveCoffee>
            <span>{amountOfCoffee}</span>
            <AddCoffee onClick={handleAddCoffee}>
              <Plus />
            </AddCoffee>
          </AmountContent>

          <ShoppingCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </ShoppingCartButton>
        </div>
      </ActionContainer>
    </Container>
  )
}
