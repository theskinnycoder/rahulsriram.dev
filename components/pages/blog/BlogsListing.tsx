import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import useSWR from 'swr'
import BlogPost from '~/components/pages/blog/BlogPost'
import { SearchIcon } from '~/icons'
import { fetcher } from '~/lib/swr'
import { Article } from '~/lib/graphcms/__generated__'

export default function BlogsListing() {
  const { data } = useSWR<{ posts: Article[] }>('/api/blog', fetcher, {
    suspense: true,
  })
  const posts = useMemo(() => data?.posts ?? [], [data])

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
    <Flex
      direction='column'
      experimental_spaceY='6'
      justify='center'
      align='flex-start'>
      <Box experimental_spaceY='2'>
        <Heading size='2xl'>The Blog.</Heading>
        <Text
          color='gray.700'
          _dark={{
            color: 'gray.300',
          }}>
          {`I've been writing online since 2020, mostly about web development and tech careers.
                In total, I've written ${posts?.length} articles on this site.
                Use the search below to filter by title.`}
        </Text>
      </Box>

      <InputGroup size='lg'>
        <Input
          variant='filled'
          ring='none'
          _focus={{
            border: '2px solid',
            borderColor: 'gray.700',
          }}
          _dark={{
            _focus: {
              borderColor: 'gray.300',
            },
          }}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          placeholder='Search for articles...'
          type='text'
        />
        <InputRightElement
          color='#9EA2AA'
          _dark={{
            color: '#4E4E50',
          }}
          children={<Icon as={SearchIcon} />}
        />
      </InputGroup>

      {!filteredBlogPosts?.length ? (
        <Text>No posts found 😞</Text>
      ) : (
        <Grid gap={20} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}>
          {filteredBlogPosts?.map(post => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </Grid>
      )}
    </Flex>
  )
}
