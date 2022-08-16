import styled from 'styled-components'

export const Container = styled.div`
  flex: none;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  background-color: ${({ theme }) => theme['base-card']};
  padding: 0 20px 20px 20px;
  cursor: grab;

  display: flex;
  flex-direction: column;

  img {
    width: 120px;
    height: 120px;
    margin: -20px auto 16px;
  }
`

export const CoffeeTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    display: inline-block;
    background-color: ${({ theme }) => theme['secondary-light']};
    color: ${({ theme }) => theme['secondary-dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 10px;
  }
`

export const CoffeeTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme['base-subtitle']};
  text-align: center;
  margin: 1rem 0 0.5rem 0;
`

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme['base-label']};
  text-align: center;
  margin-bottom: 2rem;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${({ theme }) => theme['base-text']};

    strong {
      color: ${({ theme }) => theme['base-text']};
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2';
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const AmountContent = styled.div`
  display: flex;
  border-radius: 6px;

  button {
    background-color: ${({ theme }) => theme['base-input']};
    border: none;
    color: ${({ theme }) => theme['primary-medium']};
    transition: 300ms;

    &:disabled:hover {
      background-color: ${({ theme }) => theme['base-input']};
      cursor: not-allowed;
    }

    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
      color: ${({ theme }) => theme['primary-dark']};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    background-color: ${({ theme }) => theme['base-input']};
    color: ${({ theme }) => theme['base-text']};
    border: none;
    padding: 0 4px;
    font-size: 14px;
  }
`

export const AddCoffee = styled.button`
  padding: 12px 8px 12px 8px;
  border-radius: 0 6px 6px 0;
`

export const RemoveCoffee = styled.button`
  padding: 12px 8px 12px 8px;
  border-radius: 6px 0 0 6px;
`
export const ShoppingCartButton = styled.button`
  line-height: 0;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  color: ${({ theme }) => theme.white};
  padding: 8px;
  border-radius: 6px;
  transition: 300ms;

  &:hover {
    background-color: ${({ theme }) => theme['primary-medium']};
  }
`
