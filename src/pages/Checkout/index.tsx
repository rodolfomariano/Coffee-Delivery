import { NavLink } from 'react-router-dom'

import {
  Bank,
  CaretLeft,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { CoffeeSimpleCard } from '../../components/CoffeeSimpleCard'
import { SimpleInput } from '../../components/SimpleInput'
import { formatCEP } from '../../utils/maskToCEP'
import {
  Content,
  CoffeeToBuyContainer,
  CoffeeToBuyContent,
  ConfirmOrderButton,
  Container,
  InputContainer,
  PaymentMethods,
  PaymentMethodsButton,
  PersonalDataContainer,
  PurchaseData,
} from './styles'

export function Checkout() {
  const [cpf, setCpf] = useState('')

  const cpfFormatted = formatCEP(cpf)

  function epa() {
    console.log('epa')

    if (cpf.length === 9) {
      console.log('busa dados')
    }
  }

  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 9) {
      epa()
    }
  })

  // function openWindow() {
  //   console.log('ixi')
  // }

  // function checkPageFocus() {
  //   const info = document.getElementsByName('cpf')

  //   if (document.hasFocus()) {
  //     info.innerHTML = 'O documento tem o foco.'
  //   } else {
  //     info.innerHTML = 'O documento não tem o foco.'
  //   }
  // }

  return (
    <Container>
      <NavLink to="/">
        <CaretLeft />
        Home
      </NavLink>
      <Content>
        <PersonalDataContainer>
          <h3>Complete seu pedido</h3>

          <form>
            <header>
              <MapPinLine size={22} color="#C47F17" />

              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <InputContainer>
              <SimpleInput
                name={cpf}
                type="text"
                placeholder="CEP"
                inputSize={200}
                onChange={(e) => setCpf(e.target.value)}
                value={cpfFormatted}
                maxLength={9}
              />

              <SimpleInput placeholder="Rua" />

              <div>
                <SimpleInput placeholder="Número" inputSize={200} isFlexNone />
                <SimpleInput placeholder="Complemento" isOptional />
              </div>

              <div>
                <SimpleInput placeholder="Bairro" inputSize={200} isFlexNone />
                <SimpleInput placeholder="Cidade" />
                <SimpleInput placeholder="UF" inputSize={60} isFlexNone />
              </div>
            </InputContainer>
          </form>
          <PaymentMethods>
            <header>
              <CurrencyDollar size={22} color="#804ff8" />

              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div>
              <PaymentMethodsButton>
                <CreditCard size={16} />
                Cartão de crédito
              </PaymentMethodsButton>

              <PaymentMethodsButton>
                <Bank size={16} />
                Cartão de débito
              </PaymentMethodsButton>

              <PaymentMethodsButton>
                <Money size={16} />
                dinheiro
              </PaymentMethodsButton>
            </div>
          </PaymentMethods>
        </PersonalDataContainer>

        <CoffeeToBuyContainer>
          <h3>Cafés selecionados</h3>

          <CoffeeToBuyContent>
            <CoffeeSimpleCard />
            <CoffeeSimpleCard />

            <PurchaseData>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>

              <div>
                <span>Entrega</span>
                <span>R$ 3,70</span>
              </div>

              <div>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </PurchaseData>

            <ConfirmOrderButton>Confirmar Pedido</ConfirmOrderButton>
          </CoffeeToBuyContent>
        </CoffeeToBuyContainer>
      </Content>
    </Container>
  )
}
