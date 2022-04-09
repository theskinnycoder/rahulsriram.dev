import { Global } from '@mantine/core'

const Fonts = () => (
  <Global
    styles={[
      {
        '@font-face': {
          fontFamily: 'Neuzeit Grotesk',
          src: `url('/fonts/NeuzeitGrotesk-Bold.woff2') format("woff2")`,
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'JetBrains Mono',
          src: `url('/fonts/jbm.woff2') format("woff2")`,
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'IBM Plex Sans Var',
          src: `url('/fonts/ibps.var.woff2') format("woff2")`,
          fontWeight: '100 900',
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'IBM Plex Sans Var',
          src: `url('/fonts/ibps-italic.var.woff2') format("woff2")`,
          fontWeight: '100 900',
          fontStyle: 'italic',
        },
      },
    ]}
  />
)

export default Fonts
