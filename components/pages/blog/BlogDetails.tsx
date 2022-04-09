import { Avatar, Box, Group, Stack, Text, Title } from '@mantine/core'
import { MDXRemote } from 'next-mdx-remote'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import SocialShareButtons from '~/components/pages/blog/SocialShareButtons'
import { Post } from '~/lib/mdx'
import { fetcher } from '~/lib/swr'
import MDXComponents from './MDXComponents'

export default function BlogDetails() {
  const { asPath, query } = useRouter()

  const slug = query.slug as string

  const { data: post } = useSWR<Post>(`/api/blog/${slug}`, fetcher)

  return (
    <Stack px='0' spacing='lg'>
      {/* Title */}
      <Title
        order={1}
        sx={theme => ({
          fontSize: 2 * theme.fontSizes.xl,
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          '@media (max-width: 768px)': {
            fontSize: theme.fontSizes.xl,
          },
        })}
      >
        {post?.meta?.title}
      </Title>

      {/* Details */}
      <Group position='apart' align='flex-start'>
        {/* Avatar & Author Name */}
        <Group position='center' align='center' spacing='xs'>
          <Avatar
            size='sm'
            radius='xl'
            src='https://avatars.githubusercontent.com/u/64031854?v=4'
          />
          <Text
            weight='500'
            size='md'
            sx={theme => ({
              color:
                theme.colorScheme === 'dark' ? theme.colors.gray[5] : 'initial',
              fontSize: theme.fontSizes.md,
              '@media (max-width: 768px)': {
                fontSize: theme.fontSizes.xs,
              },
            })}
          >
            {'Rahul SriRam / '}
            {post?.meta?.date}
          </Text>
        </Group>

        {/* Other Details */}
        <Group position='apart' align='center' spacing='xs'>
          <Text
            weight='500'
            size='md'
            sx={theme => ({
              color:
                theme.colorScheme === 'dark' ? theme.colors.gray[5] : 'initial',
              fontSize: theme.fontSizes.md,
              '@media (max-width: 768px)': {
                fontSize: theme.fontSizes.xs,
              },
            })}
          >
            {post?.meta?.timeTaken}
          </Text>

          <SocialShareButtons
            title={`${post?.meta?.title} by Rahul SriRam`}
            hashtag='rahulsriram'
            path={asPath}
          />
        </Group>
      </Group>

      {/* Post Content */}
      <Box
        sx={theme => ({
          wordBreak: 'break-word',
        })}
      >
        <MDXRemote {...post?.content!} components={MDXComponents} />
      </Box>
    </Stack>
  )
}
