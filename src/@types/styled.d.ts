import 'styled-components'
import { darkTheme } from '../styles/themes/dark'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme
type ThemeTypeDark = typeof darkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
  export interface Dark extends ThemeTypeDark {}
}
