import { Box, Container, Flex } from '@chakra-ui/react'
import { ReactChild } from 'react'
import Header from '~/components/Header'

interface MainLayoutProps {
  children: ReactChild
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Container maxW='700px'>
        <Box as='main' py={{ base: '4', md: '10' }}>
          <Flex
            align='center'
            justify='center'
            direction='column'
            px={{ base: '4', md: '0' }}
          >
            {children}
          </Flex>
        </Box>
      </Container>
    </>
  )
}
