import { IconButton, useColorMode, useDisclosure } from '@chakra-ui/react'
import { SettingsIcon } from '~/icons'
import SettingsModal from './SettingsModal'

export default function SettingsModalToggleButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()

  return (
    <>
      <IconButton
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
        }}
        fontSize={{ base: 'lg', md: 'xl' }}
        color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
        aria-label='Toggle settings drawer'
        onClick={onOpen}
        icon={<SettingsIcon />}
      />
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
