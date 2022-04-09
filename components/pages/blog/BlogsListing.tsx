import { Input, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { ChangeEvent, useMemo, useState } from 'react'
import useSWR from 'swr'
import BlogPost from '~/components/pages/blog/BlogPost'
import { SearchIcon } from '~/icons'
import { Article } from '~/lib/graphcms/__generated__'
import { fetcher } from '~/lib/swr'

export default function BlogsListing() {
  const { data: posts } = useSWR<Article[]>('/api/blog', fetcher)

  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = useMemo(
    () =>
      posts
        ?.sort(
          (a, b) =>
            Number(new Date(b?.updatedAt)) - Number(new Date(a?.updatedAt)),
        )
        ?.filter(post =>
          post.title.toLowerCase().includes(searchValue.toLowerCase()),
        ),
    [posts, searchValue],
  )

  return (
    <Stack spacing='xl' justify='center' align='flex-start'>
      <Stack spacing='sm'>
        <Title
          order={1}
          sx={theme => ({
            color: theme.colorScheme === 'light' ? theme.black : theme.white,
          })}
        >
          The Blog.
        </Title>
        <Text>
          {`I've been writing online since 2020, mostly about web development and tech careers.
                In total, I've written ${posts?.length} articles on this site.
                Use the search below to filter by title.`}
        </Text>
      </Stack>

      <Input
        variant='filled'
        size='md'
        value={searchValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
        placeholder='Search for blog posts...'
        rightSection={<SearchIcon />}
        sx={theme => ({
          width: '100%',
          ':focus-within': {
            outline: theme.focusRing,
          },
        })}
      />

      {!filteredBlogPosts?.length ? (
        <Title order={2} py='xl'>
          I didn&apos;t write about that yet...😞
        </Title>
      ) : (
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
          {filteredBlogPosts?.map(post => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  )
}
