import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import MainLayout from '~/layouts/MainLayout'
import '~/styles/styles.css'
import Fonts from '~/utils/fonts'
import theme from '~/utils/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  )
}
