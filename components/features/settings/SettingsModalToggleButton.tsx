import { ActionIcon } from '@mantine/core'
import { useState } from 'react'
import { SettingsIcon } from '~/icons'
import SettingsModal from './SettingsModal'

export default function SettingsModalToggleButton() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <ActionIcon size='xl' radius='md' onClick={() => setOpened(true)}>
        <SettingsIcon fontSize='20px' />
      </ActionIcon>
      <SettingsModal opened={opened} onClose={() => setOpened(false)} />
    </>
  )
}
