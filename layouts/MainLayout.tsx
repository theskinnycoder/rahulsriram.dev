import { Box, Container, Stack } from '@mantine/core'
import { ReactChild } from 'react'
import Header from '~/components/Header'

interface MainLayoutProps {
  children: ReactChild
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Container size='sm'>
        <Box
          component='main'
          py='10'
          sx={theme => ({
            paddingBlock: theme.spacing.xl,
          })}
        >
          <Stack
            align='center'
            justify='center'
            px={0}
            sx={theme => ({
              '@media (max-width: 768px)': {
                paddingInline: theme.spacing.xs,
              },
            })}
          >
            {children}
          </Stack>
        </Box>
      </Container>
    </>
  )
}
