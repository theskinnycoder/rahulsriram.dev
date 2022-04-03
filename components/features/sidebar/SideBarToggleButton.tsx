import { IconButton, useDisclosure } from '@chakra-ui/react'
import { MenuIcon } from '~/icons'
import SideBar from './SideBar'

export default function SideBarToggleButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        variant='ghost'
        display={{ base: 'inline-block', md: 'none' }}
        rounded='10px'
        colorScheme='gray'
        _hover={{
          border: '2px solid',
          borderColor: 'gray.600',
        }}
        _dark={{
          _hover: {
            border: '2px solid',
            borderColor: 'gray.300',
          },
          color: 'gray.300',
        }}
        fontSize='xl'
        color='gray.600'
        onClick={onOpen}
        icon={<MenuIcon />}
        aria-label='Open SideBar'
      />
      <SideBar isOpen={isOpen} onClose={onClose} />
    </>
  )
}
