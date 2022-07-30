import { MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { SimpleInput } from '../../components/SimpleInput'
import { formatCEP } from '../../utils/maskToCEP'
import { Container, InputContainer, PersonalDataContainer } from './styles'

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
      <PersonalDataContainer>
        <h3>Complete seu pedido</h3>

        <form>
          <header>
            <MapPinLine />

            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <SimpleInput placeholder="CEP" isOptional inputSize={200} />

          <InputContainer>
            <input
              name={cpf}
              type="text"
              placeholder="CEP"
              onChange={(e) => setCpf(e.target.value)}
              value={cpfFormatted}
              maxLength={9}
            />
            <input type="text" placeholder="Rua" />

            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </InputContainer>
        </form>
      </PersonalDataContainer>
    </Container>
  )
}
