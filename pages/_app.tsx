import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import MainLayout from '~/layouts/MainLayout'
import '~/styles/styles.css'
import Fonts from '~/utils/fonts'
import mantineTheme from '~/utils/theme'
import ScrollToTopAffix from '~/components/ScrollToTopAffix'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...mantineTheme, colorScheme } as any}
      >
        <Fonts />
        <ScrollToTopAffix />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
