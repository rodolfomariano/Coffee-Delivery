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

  & > h1 {
    padding-top: 32px;
    color: ${({ theme }) => theme['secondary-dark']};
    size: 2rem;
    line-height: 130%;
  }

  & > p {
    color: ${({ theme }) => theme['base-text']};
    size: 1.25rem;
    line-height: 130%;
  }
`

export const PurchaseDetailsContainer = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 720px) {
    justify-content: center;

    img {
      display: none;
    }
  }
`

export const PurchaseDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.background};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background-image: linear-gradient(120deg, #dbac2c, #8047f8);
  }

  & > div {
    &:nth-child(1) {
      &:nth-child(1) {
        & > div {
          &:nth-child(1) {
            background-color: ${({ theme }) => theme['primary-medium']};
          }
        }
      }
    }
  }

  & > div {
    &:nth-child(2) {
      &:nth-child(2) {
        & > div {
          &:nth-child(1) {
            background-color: ${({ theme }) => theme['secondary-medium']};
          }
        }
      }
    }
  }

  & > div {
    &:nth-child(3) {
      &:nth-child(3) {
        & > div {
          &:nth-child(1) {
            background-color: ${({ theme }) => theme['secondary-dark']};
          }
        }
      }
    }
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const IconWrapped = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: ${({ theme }) => theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme['base-text']};
    line-height: 130%;
  }
`
