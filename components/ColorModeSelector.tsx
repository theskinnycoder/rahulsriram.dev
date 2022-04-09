import {
  Box,
  Center,
  SegmentedControl,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { MoonIcon, SunIcon } from '~/icons'

export default function ColorModeSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Stack align='start' pb={2}>
      <Text size='md' weight='600'>
        Color Mode
      </Text>
      <SegmentedControl
        value={colorScheme}
        onChange={toggleColorScheme}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <SunIcon size={16} />
                <Box ml={10}>Light</Box>
              </Center>
            ),
          },
          {
            value: 'dark',
            label: (
              <Center>
                <MoonIcon size={16} />
                <Box ml={10}>Dark</Box>
              </Center>
            ),
          },
        ]}
      />
    </Stack>
  )
}
