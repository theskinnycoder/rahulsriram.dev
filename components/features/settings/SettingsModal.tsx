import {
  Divider,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import ColorModeSelector from '~/components/ColorModeSelector'

type SettingsModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const dividerColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
      <ModalOverlay bg='whiteAlpha.200' backdropFilter='blur(5px)' />
      <ModalContent bg='transparent' backdropFilter={`blur(30px)`} p={3}>
        <ModalHeader>
          <Heading size='md'>Settings</Heading>
        </ModalHeader>
        <ModalCloseButton
          autoFocus={false}
          ring='none'
          _focus={{ scale: 1.1 }}
        />
        <VStack
          as={ModalBody}
          align='start'
          justify='center'
          experimental_spaceY={3}>
          <Divider borderColor={dividerColor} />
          <ColorModeSelector />
          <Divider borderColor={dividerColor} />
        </VStack>
      </ModalContent>
    </Modal>
  )
}
