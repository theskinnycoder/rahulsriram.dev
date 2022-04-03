import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Article } from '~/lib/graphcms/__generated__'

export default function BlogPost(post: Article) {
  const { title, excerpt, slug, coverpic } = post

  return (
    <Flex
      direction='column'
      justify='center'
      align='flex-start'
      boxShadow='base'
      transition='ease-in-out 0.1s'
      _hover={{
        outline: '2px solid',
        outlineColor: 'gray.700',
      }}
      _dark={{
        _hover: {
          outlineColor: 'gray.300',
        },
      }}
      className='group'>
      <NextLink href={`/blog/${slug}`}>
        <Link position='relative' overflow='hidden'>
          <Image
            transition='ease-in-out 0.3s'
            _groupHover={{
              transition: 'ease-in-out 0.3s',
              transform: 'scale(1.1)',
            }}
            src={coverpic?.url}
            alt={title}
            objectFit='contain'
            objectPosition='center'
          />
        </Link>
      </NextLink>
      <Box experimental_spaceY='1' p='2'>
        <NextLink href={`/blog/${slug}`} passHref>
          <Link
            style={{
              textDecoration: 'none',
            }}>
            <Heading fontSize='2xl' mt={2}>
              {title}
            </Heading>
          </Link>
        </NextLink>
        <Text
          fontSize='sm'
          fontWeight='medium'
          color='gray.700'
          _dark={{
            color: 'gray.300',
            fontWeight: 'normal',
          }}>
          {excerpt}
        </Text>
      </Box>
    </Flex>
  )
}
