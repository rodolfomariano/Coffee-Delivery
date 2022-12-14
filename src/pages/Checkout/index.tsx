import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'

import {
  Bank,
  CaretLeft,
  CreditCard,
  CurrencyDollar,
  HouseSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'

import { CoffeeSimpleCard } from '../../components/CoffeeSimpleCard'
import { SimpleInput } from '../../components/SimpleInput'

import { formatCEP } from '../../utils/maskToCEP'
import { cepAPI } from '../../utils/api'

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
import { useShoppingCart } from '../../hooks/useShoppingCart'
import { coinFormat } from '../../utils/coinFormat'

interface CepResponse {
  data: {
    bairro: string
    localidade: string
    logradouro: string
    uf: string
  }
}

export function Checkout() {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const [loading, setLoading] = useState(false)
  const [getAddressError, setGetAddressError] = useState('')

  const [formsToPay, setFormsToPay] = useState<
    'credit-card' | 'debit-card' | 'money'
  >('credit-card')

  const CepFormatted = formatCEP(cep)
  const removeTheFormate = cep.replace('-', '')

  const { shoppingCart, subTotalCalc, subTotal, clearCart } = useShoppingCart()

  const navigate = useNavigate()

  const userAddressAndFormsOfPay = {
    street,
    houseNumber,
    district,
    city,
    state,
    formsToPay,
  }

  function resetForm() {
    setStreet('')
    setDistrict('')
    setCity('')
    setState('')
  }

  async function getAddress() {
    setLoading(true)

    if (cep.length === 0) {
      setLoading(false)
      resetForm()
      return setGetAddressError('Incira um CEP')
    }

    if (cep.length < 9 && cep.length !== 0) {
      setLoading(false)
      resetForm()
      return setGetAddressError('CEP incompl??to')
    }

    if (cep.length === 9) {
      resetForm()

      try {
        await cepAPI
          .get(`viacep.com.br/ws/${removeTheFormate}/json/`)
          .then((response: CepResponse) => {
            if (!response.data.bairro) {
              setLoading(false)
              return setGetAddressError('Endere??o n??o encontrado')
            }
            if (response.data.bairro) {
              setGetAddressError('')
              setLoading(false)

              setStreet(response.data.logradouro)
              setDistrict(response.data.bairro)
              setCity(response.data.localidade)
              setState(response.data.uf)
            }
          })
      } catch (error) {
        setLoading(false)
        console.log('error')
        return setGetAddressError('Erro na busca do endere??o')
      }
    }
  }

  function finalizePurchase() {
    if (street) {
      navigate(`/success/${JSON.stringify(userAddressAndFormsOfPay)}`)
      clearCart()
    } else if (cep.length < 9) {
      alert('CEP inv??lido')
    } else if (!houseNumber) {
      alert('Informe o n??mero')
    } else {
      alert('Informe um Endere??o v??lido')
    }
  }

  useEffect(() => {
    subTotalCalc()
  }, [subTotalCalc])

  return (
    <Container>
      <NavLink to="/">
        <HouseSimple />
        Home
      </NavLink>
      <Content>
        <PersonalDataContainer>
          <h3>Complete seu pedido</h3>

          <form>
            <header>
              <MapPinLine size={22} color="#C47F17" />

              <div>
                <h4>Endere??o de Entrega</h4>
                <p>Informe o endere??o onde deseja receber seu pedido</p>
              </div>
            </header>

            <InputContainer>
              <div>
                <SimpleInput
                  type="text"
                  placeholder="CEP"
                  inputSize={200}
                  value={CepFormatted}
                  maxLength={9}
                  autoFocus
                  required
                  onBlur={getAddress}
                  onChange={(e) => setCep(e.target.value)}
                />
                {loading && (
                  <span>
                    <ClipLoader color="#4B2995" loading={loading} size={20} />{' '}
                    <span>Buscando dados...</span>
                  </span>
                )}
                {!loading && getAddressError !== '' && (
                  <span>{getAddressError}</span>
                )}
              </div>

              <SimpleInput placeholder="Rua" disabled value={street} />

              <div>
                <SimpleInput
                  placeholder="N??mero"
                  inputSize={200}
                  type="number"
                  isFlexNone
                  onChange={(e) => setHouseNumber(e.target.value)}
                  value={houseNumber}
                  required
                />
                <SimpleInput
                  placeholder="Complemento"
                  isOptional
                  onChange={(e) => setComplement(e.target.value)}
                  value={complement}
                />
              </div>

              <div>
                <SimpleInput
                  placeholder="Bairro"
                  inputSize={200}
                  isFlexNone
                  disabled
                  value={district}
                />
                <SimpleInput placeholder="Cidade" disabled value={city} />
                <SimpleInput
                  placeholder="UF"
                  inputSize={60}
                  isFlexNone
                  disabled
                  value={state}
                />
              </div>
            </InputContainer>
          </form>
          <PaymentMethods>
            <header>
              <CurrencyDollar size={22} color="#804ff8" />

              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento ?? feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div>
              <PaymentMethodsButton
                className={formsToPay === 'credit-card' ? 'activity' : ''}
                onClick={() => setFormsToPay('credit-card')}
              >
                <CreditCard size={16} />
                Cart??o de cr??dito
              </PaymentMethodsButton>

              <PaymentMethodsButton
                className={formsToPay === 'debit-card' ? 'activity' : ''}
                onClick={() => setFormsToPay('debit-card')}
              >
                <Bank size={16} />
                Cart??o de d??bito
              </PaymentMethodsButton>

              <PaymentMethodsButton
                className={formsToPay === 'money' ? 'activity' : ''}
                onClick={() => setFormsToPay('money')}
              >
                <Money size={16} />
                dinheiro
              </PaymentMethodsButton>
            </div>
          </PaymentMethods>
        </PersonalDataContainer>

        <CoffeeToBuyContainer>
          <h3>Caf??s selecionados</h3>

          {shoppingCart.length > 0 ? (
            <CoffeeToBuyContent>
              {shoppingCart
                .map((coffee) => {
                  return (
                    <CoffeeSimpleCard
                      key={coffee.id}
                      id={coffee.id}
                      title={coffee.title}
                      image={coffee.image}
                      amount={coffee.amount}
                      price={coffee.price}
                    />
                  )
                })
                .sort((item1, item2) => Number(item1.key) - Number(item2.key))}

              <PurchaseData>
                <div>
                  <span>Total de itens</span>
                  <span>{coinFormat(subTotal)}</span>
                </div>

                <div>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>

                <div>
                  <strong>Total</strong>
                  <strong>{coinFormat(subTotal + 3.5)}</strong>
                </div>
              </PurchaseData>

              <ConfirmOrderButton onClick={finalizePurchase}>
                Confirmar Pedido
              </ConfirmOrderButton>
            </CoffeeToBuyContent>
          ) : (
            <strong>Voc?? n??o tem itens no carrinho</strong>
          )}
        </CoffeeToBuyContainer>
      </Content>
    </Container>
  )
}
