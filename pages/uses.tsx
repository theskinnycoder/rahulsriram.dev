import { Divider, List, Stack, Text, Title } from '@mantine/core'
import usesData from '~/components/pages/uses/usesData'

export default function UsesPage() {
  return (
    <Stack spacing='sm' justify='center' align='flex-start'>
      <Stack spacing='xs'>
        <Title
          order={1}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          })}
        >
          What I Use.
        </Title>
        <Text>
          I get lots of questions about what kind of hardware, software, desk
          setup, etc. that I use. Well, here ya go!
        </Text>
      </Stack>
      <Stack spacing='md' justify='center' align='flex-start'>
        {Object.entries(usesData).map(([key, values]) => (
          <>
            <Divider my='sm' />
            <div key={key}>
              <Title
                order={2}
                sx={{
                  textTransform: 'capitalize',
                }}
                mb='lg'
              >
                {key}
              </Title>
              <List spacing='lg'>
                {values.map((value, idx) => (
                  <List.Item icon={value.icon} key={idx}>
                    <div
                      style={{
                        marginTop: '-0.5rem',
                      }}
                    >
                      <Text weight='600'>{value['name']}</Text>
                      {typeof value.subText === 'string' && (
                        <Text>{value.subText}</Text>
                      )}
                    </div>
                  </List.Item>
                ))}
              </List>
            </div>
          </>
        ))}
      </Stack>
    </Stack>
  )
}
