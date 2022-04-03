import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import usesData from '~/components/pages/uses/usesData'

export default function UsesPage() {
  return (
    <Flex
      direction='column'
      experimental_spaceY='6'
      justify='center'
      align='flex-start'>
      <Box experimental_spaceY='2'>
        <Heading size='2xl'>What I Use.</Heading>
        <Text
          color='gray.700'
          _dark={{
            color: 'gray.300',
          }}>
          I get lots of questions about what kind of hardware, software, desk
          setup, etc. that I use. Well, here ya go!
        </Text>
      </Box>
      <Flex
        direction='column'
        experimental_spaceY='6'
        justify='center'
        align='flex-start'>
        {Object.entries(usesData).map(([key, values]) => (
          <>
            <Divider />
            <Box key={key}>
              <Heading size='xl' textTransform='capitalize' mb={2}>
                {key}
              </Heading>
              <List spacing={3}>
                {values.map((value, idx) => (
                  <ListItem
                    key={idx}
                    display='flex'
                    alignItems='center'
                    justifyContent='start'
                    experimental_spaceX={5}>
                    {value['icon']}
                    <Box>
                      <Text fontSize='xl' fontWeight='medium'>
                        {value['name']}
                      </Text>
                      {typeof value['subText'] === 'string' && (
                        <Text>{value['subText']}</Text>
                      )}
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>
          </>
        ))}
      </Flex>
    </Flex>
  )
}
