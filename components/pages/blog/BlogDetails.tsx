import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react'
import { formatDistanceToNow } from 'date-fns'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import readingTime from 'reading-time'
import useSWR from 'swr'
import SocialShareButtons from '~/components/pages/blog/SocialShareButtons'
import { GitHubIcon } from '~/icons'
import { fetcher } from '~/lib/swr'
import { Article } from '~/lib/graphcms/__generated__'

export default function BlogDetails() {
  const { asPath, query } = useRouter()
  const { data } = useSWR<{ post: Article }>(
    `/api/blog/${query?.slug}`,
    fetcher,
  )

  const post = useMemo(() => data?.post, [data])

  return (
    <Container
      px='0'
      maxW='container.xl'
      display='flex'
      flexDirection='column'
      align='flex-start'
      justify='center'
      experimental_spaceY='2'>
      {/* Title */}
      <Heading fontSize={{ base: '3xl', md: '5xl' }} ml='-1'>
        {post?.title}
      </Heading>

      {/* Details */}
      <Flex
        py='3'
        direction={['column', 'row']}
        justify='space-between'
        align={['flex-start', 'center']}
        experimental_spaceY={{
          base: '2',
          md: '0',
        }}>
        {/* Avatar & Author Name */}
        <Flex align='center' justify='center'>
          <Avatar
            size='sm'
            name='Rahul SriRam'
            src='https://avatars.githubusercontent.com/u/64031854?v=4'
          />
          <Text
            fontWeight='medium'
            fontSize={{ base: 'xs', md: 'sm' }}
            ml='2'
            color='gray.700'
            _dark={{ color: 'gray.300' }}>
            {'Rahul SriRam / '}
            {formatDistanceToNow(new Date(post?.updatedAt!), {
              addSuffix: true,
              includeSeconds: true,
            })}
          </Text>
        </Flex>

        {/* Other Details */}
        <Flex
          justify='space-between'
          align='center'
          experimental_spaceX='2'
          w={['full', 'auto']}>
          <Text
            fontWeight='medium'
            fontSize={{ base: 'xs', md: 'sm' }}
            color='gray.700'
            _dark={{ color: 'gray.300' }}>
            {readingTime(post?.content as string).text}
          </Text>

          <SocialShareButtons
            title={`${post?.title} by Rahul SriRam`}
            hashtag='rahulsriram'
            path={asPath}
          />
        </Flex>
      </Flex>

      {/* Post Content */}
      <Box
        pb='4'
        color='gray.700'
        fontWeight='medium'
        _dark={{ color: 'gray.300' }}
        style={{
          lineHeight: '28px',
        }}
        fontSize={{
          base: 'sm',
          md: 'md',
        }}>
        {post?.content}
      </Box>

      {/* Edit on GitHub */}
      <Flex
        py='2'
        className='group'
        align='center'
        experimental_spaceX='1'
        display='inline-flex'>
        <Icon
          as={GitHubIcon}
          mx='2px'
          display='none'
          _groupHover={{ display: 'inline-block' }}
        />
      </Flex>
    </Container>
  )
}
