import { Divider, Modal, Stack, Title } from '@mantine/core'
import ColorModeSelector from '~/components/ColorModeSelector'

type SettingsModalProps = {
  opened: boolean
  onClose: () => void
}

export default function SettingsModal({ opened, onClose }: SettingsModalProps) {
  return (
    <Modal
      sx={{
        backdropFilter: 'blur(10px)',
      }}
      overlayOpacity={0}
      shadow='xl'
      opened={opened}
      onClose={onClose}
      size='xl'
      title={<Title order={3}>Settings</Title>}
      withCloseButton
    >
      <Stack align='start' justify='center' spacing='xl'>
        <Divider />
        <ColorModeSelector />
        <Divider />
      </Stack>
    </Modal>
  )
}
