import { Minus, Plus, Trash } from 'phosphor-react'

import Express from '../../assets/coffees/express.svg'

import {
  CoffeeSimpleCardContainer,
  AddCoffee,
  AmountContent,
  CoffeeSimpleCardContent,
  RemoveCoffee,
} from './styles'

export function CoffeeSimpleCard() {
  return (
    <CoffeeSimpleCardContainer>
      <img src={Express} alt="" />

      <CoffeeSimpleCardContent>
        <strong>Expresso Tradicional</strong>

        <div>
          <AmountContent>
            <RemoveCoffee>
              <Minus />
            </RemoveCoffee>
            <span>1</span>
            <AddCoffee>
              <Plus />
            </AddCoffee>
          </AmountContent>
          <button>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </CoffeeSimpleCardContent>

      <strong>R$ 9,90</strong>
    </CoffeeSimpleCardContainer>
  )
}
