import { extendTheme } from '@chakra-ui/react'

const fonts = {
  sans: `'Inter', sans-serif`,
  mono: `'Menlo', monospace`
}

const breakpoints = {
  sm: '18',
  md: '22',
  lg: '24',
  xl: '32',
}


const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#ffffff',
        _dark: '#ade3b8',
      },
    },
  },
  colors: {
    darkBlue: '#213159',
    red: '#3d6098',
    black: '#16161D',
    royalblue: '#0070f3',
  },
  fonts,
  breakpoints,
})

export default theme
