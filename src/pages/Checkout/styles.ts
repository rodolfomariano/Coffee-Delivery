import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1200px;
  padding: 32px 10px;
  margin: 0 auto;
`

export const PersonalDataContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const CoffeeToBuyContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    gap: 12px;
  }
`
