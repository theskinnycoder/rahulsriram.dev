import { Button, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { SettingsModalToggleButton } from './features/settings'
import { SideBarToggleButton } from './features/sidebar'
import links from './links'

export default function Header() {
  const { asPath } = useRouter()

  return (
    <Flex
      justify='space-between'
      align='center'
      py={{ base: '4', md: '8' }}
      px={{ base: 6, md: 0 }}
      style={{ top: 0 }}
      pos='sticky'
      zIndex={10}
      bg='transparent'
      backdropFilter={`blur(10px)`}
      maxW='700px'
      mx='auto'>
      <Flex
        display={{ base: 'none', md: 'inline' }}
        align='center'
        justify='center'
        experimental_spaceX='1.5'
        as='nav'>
        {links.map(link => (
          <Link href={link.url} as={NextLink} key={link.name} passHref>
            <Button
              as='a'
              fontSize={['sm', 'md']}
              variant='ghost'
              size='sm'
              color={asPath === link.url ? 'black' : 'gray.700'}
              fontWeight={asPath === link.url ? 'bold' : 'medium'}
              transition='ease-in-out 0.21s'
              _hover={{
                transition: 'ease-in-out 0.21s',
                outline: '2px solid',
                outlineColor: 'gray.700',
              }}
              _dark={{
                color: asPath === link.url ? 'white' : 'gray.300',
                _hover: {
                  outlineColor: 'gray.300',
                },
              }}>
              {link.name}
            </Button>
          </Link>
        ))}
      </Flex>
      <SideBarToggleButton />
      <SettingsModalToggleButton />
    </Flex>
  )
}
