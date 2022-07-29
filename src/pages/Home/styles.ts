import styled from 'styled-components'
import BGImage from '../../assets/background-banner.svg'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`

export const Banner = styled.div`
  width: 100%;
  height: 500px;
  background: url(${BGImage}) no-repeat content-box;
  background-size: cover;

  display: flex;
  align-items: center;
`

export const BannerContent = styled.section`
  max-width: 1100px;
  padding: 32px 10px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  div {
    flex: 1;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
      margin-top: 16px;
    }
  }

  img {
    max-width: 400px;
  }

  @media (max-width: 1000px) {
    img {
      width: 276px;
    }
  }

  @media (max-width: 720px) {
    h1 {
      text-align: center;
    }

    img {
      display: none;
    }

    div {
      text-align: center;
    }
  }
`

export const BenefitsContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));

  @media (max-width: 720px) {
    justify-content: center;
  }
`

export const BenefitsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  &:nth-child(1) {
    div {
      background-color: ${({ theme }) => theme['secondary-dark']};
    }
  }

  &:nth-child(2) {
    div {
      background-color: ${({ theme }) => theme['gray-700']};
    }
  }

  &:nth-child(3) {
    div {
      background-color: ${({ theme }) => theme['secondary-medium']};
    }
  }

  &:nth-child(4) {
    div {
      background-color: ${({ theme }) => theme['primary-medium']};
    }
  }

  div {
    flex: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${({ theme }) => theme.white};
    background-color: red;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    flex: none;
    line-height: 130%;
  }
`
export const Content = styled.main`
  width: 100%;
  max-width: 1100px;
  padding: 32px 10px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 2rem;
    margin-top: 1.375rem;
  }
`
