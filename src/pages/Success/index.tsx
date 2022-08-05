import { CurrencyDollar, HouseSimple, MapPin, Timer } from 'phosphor-react'
import {
  Container,
  Details,
  DetailsContainer,
  IconWrapped,
  PurchaseDetails,
  PurchaseDetailsContainer,
} from './styles'

import Illustration from '../../assets/illustration.svg'
import { NavLink, useParams } from 'react-router-dom'

interface DataProps {
  street: string
  houseNumber: number
  district: string
  city: string
  state: string
  formsToPay: string
}

export function Success(props: any) {
  const { data } = useParams<string | any>()

  const userData: DataProps = JSON.parse(data as string)

  return (
    <Container>
      <NavLink to="/">
        <HouseSimple />
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
                Entrega em{' '}
                <strong>{`${userData.street}, ${userData.houseNumber}`}</strong>
                <br />
                {`${userData.district} - ${userData.city}, ${userData.state}`}
              </p>
            </Details>
          </DetailsContainer>

          <DetailsContainer>
            <IconWrapped>
              <Timer />
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
              <CurrencyDollar />
            </IconWrapped>

            <Details>
              <p>
                Forma de pagamento
                <br />
                <strong>
                  {userData.formsToPay === 'money'
                    ? 'Dinheiro'
                    : userData.formsToPay === 'credit-card'
                    ? 'Cartão de Crédito'
                    : 'Cartão de Débito'}
                </strong>
              </p>
            </Details>
          </DetailsContainer>
        </PurchaseDetails>

        <img src={Illustration} alt="" />
      </PurchaseDetailsContainer>
    </Container>
  )
}
