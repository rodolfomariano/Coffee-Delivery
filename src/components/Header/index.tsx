import { CarContainer, Container, ThemeContainer } from './styles'

import HeaderLogo from '../../assets/logo.svg'
import HeaderLogoLight from '../../assets/logo-light.svg'

import { MapPin, Moon, ShoppingCart, SunDim } from 'phosphor-react'
import { useTheme } from '../../hooks/useTheme'

export function Header() {
  const { theme, alterTheme } = useTheme()

  return (
    <Container>
      <img
        src={
          theme === 'light' || theme === undefined
            ? HeaderLogo
            : HeaderLogoLight
        }
        alt=""
      />

      <ThemeContainer>
        <button onClick={() => alterTheme('light')}>
          {theme === 'light' ? (
            <SunDim color="#4B2995" size={26} weight="fill" />
          ) : (
            <SunDim size={26} />
          )}
        </button>

        <button onClick={() => alterTheme('dark')}>
          {theme === 'dark' ? (
            <Moon color="#4B2995" size={26} weight="fill" />
          ) : (
            <Moon size={26} />
          )}
        </button>
      </ThemeContainer>

      <CarContainer>
        <button>
          <MapPin
            weight="fill"
            color={theme === 'light' ? '#4B2995' : '#EBE5F9'}
            size={22}
          />
          Porto Alegre, RS
        </button>
        <a href="#">
          <ShoppingCart weight="fill" color="#C47F17" size={22} />
        </a>
      </CarContainer>
    </Container>
  )
}
