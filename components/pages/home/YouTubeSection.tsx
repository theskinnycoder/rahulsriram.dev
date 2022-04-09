import { Button, Group, SimpleGrid, Title } from '@mantine/core'
import useSWR from 'swr'
import { ExtLinkIcon } from '~/icons'
import { fetcher } from '~/lib/swr'
import YouTubeVideoCard from './YouTubeVideoCard'

export default function YouTubeSection() {
  const { data: videos } = useSWR('/api/youtube', fetcher)

  return (
    <>
      <Group position='apart' align='center'>
        <Title
          order={2}
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          })}
        >
          Recent Videos.
        </Title>

        <Button
          variant='subtle'
          component='a'
          href={`https://www.youtube.com/c/TheSkinnyCoder`}
          color='gray'
          size='xs'
          target='_blank'
          sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing.md,
            '@media (max-width: 768px)': {
              marginBottom: theme.spacing.xs,
            },
          })}
        >
          <span>See More</span>
          <ExtLinkIcon />
        </Button>
      </Group>
      <SimpleGrid
        spacing='xl'
        breakpoints={[
          {
            maxWidth: 'xs',
            cols: 1,
          },
          {
            minWidth: 'xs',
            cols: 2,
          },
        ]}
      >
        {videos?.map((video: any) => (
          <YouTubeVideoCard key={video?.id} video={video} />
        ))}
      </SimpleGrid>
    </>
  )
}
