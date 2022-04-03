import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'

interface SideBarProps {
  isOpen: boolean
  onClose: () => void
}

export default function SideBar({ isOpen, onClose }: SideBarProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      isFullHeight
      size='xs'>
      <DrawerOverlay />
      <DrawerContent bgColor='white' _dark={{ bgColor: '#08070B' }}>
        <DrawerCloseButton
          autoFocus={false}
          ring='none'
          _focus={{ scale: 1.1 }}
        />
        <DrawerHeader>Rahul SriRam</DrawerHeader>
        <DrawerBody></DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
