import { ActionIcon } from '@mantine/core'
import { useState } from 'react'
import { MenuIcon } from '~/icons'
import SideBar from './SideBar'

export default function SideBarToggleButton() {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <ActionIcon
        size='xl'
        radius='md'
        onClick={() => {
          setOpened(true)
        }}
        sx={{
          display: 'inline-block',
          '@media (min-width: 768px)': {
            display: 'none',
          },
        }}
      >
        <MenuIcon fontSize='20px' />
      </ActionIcon>
      <SideBar
        opened={opened}
        onClose={() => {
          setOpened(false)
        }}
      />
    </>
  )
}
