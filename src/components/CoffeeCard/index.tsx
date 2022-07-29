import {
  ActionContainer,
  AddCoffee,
  CoffeeDescription,
  CoffeeTitle,
  CoffeeTypeContainer,
  Container,
  InputContent,
  RemoveCoffee,
  ShoppingCartButton,
} from './styles'

import Express from '../../assets/coffees/express.svg'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <Container>
      <img src={Express} alt="" />

      <CoffeeTypeContainer>
        <span>Expresso</span>
      </CoffeeTypeContainer>

      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>

      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>

      <ActionContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <div>
          <InputContent>
            <RemoveCoffee>
              <Minus />
            </RemoveCoffee>
            <input type="" value={10} />
            <AddCoffee>
              <Plus />
            </AddCoffee>
          </InputContent>

          <ShoppingCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </ShoppingCartButton>
        </div>
      </ActionContainer>
    </Container>
  )
}
