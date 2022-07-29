import styled from 'styled-components'

export const Container = styled.header`
  max-width: 1200px;
  padding: 32px 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 85px;
  }
`

export const ThemeContainer = styled.div`
  display: flex;
  gap: 4px;

  button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme['gray-200']};
    transition: 300ms;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme['primary-dark']};
    }
  }
`

export const CarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    border: none;
    background-color: ${({ theme }) => theme['primary-light']};
    color: ${({ theme }) => theme['primary-dark']};
    font-size: 0.75rem;
    padding: 8px;
    border-radius: 6px;
    transition: 300ms;

    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    text-decoration: none;
    background-color: ${({ theme }) => theme['secondary-light']};
    padding: 8px;
    border-radius: 6px;
    transition: 300ms;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
