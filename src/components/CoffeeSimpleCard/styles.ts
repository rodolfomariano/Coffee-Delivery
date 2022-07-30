import styled from 'styled-components'

export const CoffeeSimpleCardContainer = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  display: flex;

  img {
    width: 64px;
    margin-right: 20px;
  }

  & > strong {
    margin-left: auto;
  }

  & + div {
    margin-top: 24px;
  }
`

export const CoffeeSimpleCardContent = styled.div`
  strong {
    display: inline-block;
    margin-bottom: 8px;
  }
  & > div {
    display: flex;
    gap: 8px;

    & > button {
      font-size: 0.75rem;
      color: ${({ theme }) => theme['base-text']};
      padding: 6px 8px;
      background-color: ${({ theme }) => theme['base-button']};
      border: none;
      border-radius: 6px;
      transition: 300ms;

      display: flex;
      align-items: center;
      gap: 4px;

      &:hover {
        background-color: ${({ theme }) => theme['base-hover']};
      }

      & > svg {
        color: ${({ theme }) => theme['primary-dark']};
      }
    }
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
  padding: 8px 6px;
  border-radius: 0 6px 6px 0;
`

export const RemoveCoffee = styled.button`
  padding: 8px 6px;
  border-radius: 6px 0 0 6px;
`
