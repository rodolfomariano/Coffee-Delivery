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
  max-width: 1200px;
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
  max-width: 1200px;
  padding: 32px 10px;
  margin: 0 auto;

  h2 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 2rem;
    margin-top: 1.375rem;
  }
`

export const CardList = styled.div`
  margin-top: 54px;
  margin-bottom: 54px;

  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    justify-content: center;
  }
`

export const DropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme['base-dropContainer']};
  padding: 16px;
  backdrop-filter: blur(1.5px);
  transition: 300ms;

  &.hidden {
    top: -100px;
  }

  &.visible {
    top: 0;

    &::after,
    &::before {
      content: '';
      left: 0;
      top: 0;
      z-index: -1;
      position: absolute;
      /* height: 0; */
      height: 100px;

      background-color: #804ff888;
      width: 100%;
      opacity: 0.1;
    }

    &::before {
      animation: pulse 1s ease-out infinite;
    }

    &::after {
      animation: pulse 2s ease-out infinite;
    }

    @keyframes pulse {
      100% {
        transform: scale(1.5);
      }
    }
  }

  &.isHover {
    div {
      border: 2px dashed white;
    }
  }

  div {
    width: 100%;
    height: 100%;
    border: 2px dashed rgba(174, 146, 153, 0.6);
    border-radius: 8px;
    color: ${({ theme }) => theme['primary-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    strong {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

export const FloatActionsContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 30px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    position: relative;
    width: 50px;
    height: 50px;
    text-decoration: none;
    background-color: ${({ theme }) => theme['secondary-light']};
    padding: 8px;
    border-radius: 10px;
    transition: 300ms;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }

    span {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 20px;
      height: 20px;
      background-color: ${({ theme }) => theme['secondary-dark']};
      border-radius: 50%;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.white};

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 720px) {
    right: 10px;
  }
`

export const SendToTopButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme['primary-dark']};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 10px;
  transition: filter 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`
