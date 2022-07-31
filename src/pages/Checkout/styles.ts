import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1200px;
  padding: 32px 10px;
  margin: 0 auto;

  a {
    width: 80px;
    color: ${({ theme }) => theme['primary-medium']};
    text-decoration: none;
    transition: 300ms;

    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      color: ${({ theme }) => theme['primary-dark']};
    }
  }
`
export const Content = styled.div`
  padding-top: 32px;

  display: flex;
  gap: 32px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const PersonalDataContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 130%;
    margin-bottom: 32px;
  }

  form {
    background-color: ${({ theme }) => theme['base-card']};
    padding: 40px;
    border-radius: 6px;
    margin-bottom: 12px;

    @media (max-width: 720px) {
      padding: 16px;
    }

    header {
      margin-bottom: 32px;

      display: flex;
      gap: 8px;
      align-items: flex-start;

      div {
        h4 {
          color: ${({ theme }) => theme['base-subtitle']};
        }

        p {
          color: ${({ theme }) => theme['base-text']};
          font-size: 0.875rem;
        }
      }
    }
  }
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

export const PaymentMethods = styled.section`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 40px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  header {
    margin-bottom: 16px;

    display: flex;
    gap: 8px;
    align-items: flex-start;

    div {
      h4 {
        color: ${({ theme }) => theme['base-subtitle']};
      }

      p {
        color: ${({ theme }) => theme['base-text']};
        font-size: 0.875rem;
      }
    }
  }

  & > div {
    display: flex;
    gap: 12px;
  }

  @media (max-width: 720px) {
    padding: 16px;
  }
`

export const PaymentMethodsButton = styled.button`
  width: 33%;
  max-width: 180px;
  text-transform: uppercase;
  font-size: 0.75rem;
  border: none;
  background-color: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  transition: 300ms;

  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;

  svg {
    color: ${({ theme }) => theme['primary-dark']};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const CoffeeToBuyContainer = styled.section`
  width: 448px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    line-height: 130%;
    margin-bottom: 32px;
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`
export const CoffeeToBuyContent = styled.div`
  width: 100%;
  max-width: 448px;
  background-color: ${({ theme }) => theme['base-card']};
  padding: 50px 40px;
  border-radius: 6px 36px;

  @media (max-width: 720px) {
    padding: 32px 16px;
  }
`

export const PurchaseData = styled.section`
  margin: 24px 0;

  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875;
      color: ${({ theme }) => theme['base-text']};
    }

    strong {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-title']};
    }
  }
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  padding: 12px 8px;
  background-color: #c47f17;
  border: none;
  color: #f3f3f3;
  border-radius: 6px;
  transition: 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.8);
  }
`
