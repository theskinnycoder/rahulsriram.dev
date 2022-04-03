import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
  useRadio,
  useRadioGroup,
  VStack,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '~/icons'

function RadioCard(props: any) {
  const bgColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.600')

  const { getInputProps, getCheckboxProps } = useRadio(props)

  return (
    <label>
      <input {...getInputProps()} />
      <Button
        variant='outline'
        as={Box}
        leftIcon={props.icon}
        {...getCheckboxProps()}
        _checked={{
          bgColor,
        }}>
        {props.children}
      </Button>
    </label>
  )
}

export default function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'colorMode',
    defaultValue: colorMode,
    onChange: toggleColorMode,
  })

  const options = ['light', 'dark']

  return (
    <VStack as={FormControl} align='start' pb={2}>
      <FormLabel htmlFor='dark-mode' mb='0'>
        <Text size='md' fontWeight='semibold'>
          Color Mode
        </Text>
      </FormLabel>
      <HStack {...getRootProps()}>
        {options.map(value => (
          <RadioCard
            key={value}
            {...getRadioProps({ value })}
            icon={value === 'light' ? <SunIcon /> : <MoonIcon />}>
            {value}
          </RadioCard>
        ))}
      </HStack>
    </VStack>
  )
}
