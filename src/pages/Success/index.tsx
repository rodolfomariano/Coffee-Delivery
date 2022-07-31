import { CaretLeft, MapPin } from 'phosphor-react'
import {
  Container,
  Details,
  DetailsContainer,
  IconWrapped,
  PurchaseDetails,
  PurchaseDetailsContainer,
} from './styles'

import Illustration from '../../assets/illustration.svg'
import { NavLink } from 'react-router-dom'

export function Success() {
  return (
    <Container>
      <NavLink to="/">
        <CaretLeft />
        Home
      </NavLink>

      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <PurchaseDetailsContainer>
        <PurchaseDetails>
          <DetailsContainer>
            <IconWrapped>
              <MapPin />
            </IconWrapped>

            <Details>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </Details>
          </DetailsContainer>

          <DetailsContainer>
            <IconWrapped>
              <MapPin />
            </IconWrapped>

            <Details>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </Details>
          </DetailsContainer>

          <DetailsContainer>
            <IconWrapped>
              <MapPin />
            </IconWrapped>

            <Details>
              <p>
                Pagamento da entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            </Details>
          </DetailsContainer>
        </PurchaseDetails>

        <img src={Illustration} alt="" />
      </PurchaseDetailsContainer>
    </Container>
  )
}
