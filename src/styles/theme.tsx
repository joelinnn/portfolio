import { extendTheme } from '@chakra-ui/react'

const fonts = {
  sans: `'Poppins', sans-serif`,
  mono: `'Menlo', monospace`
}

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
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
