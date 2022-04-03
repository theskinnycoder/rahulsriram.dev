import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import TypeWriter from 'react-typing-effect'
import {
  ExtLinkIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from '~/icons'

export default function HeroSection() {
  return (
    <Flex
      justify='space-between'
      align='center'
      wrap='wrap'
      w='full'
      direction={{ base: 'row', md: 'row-reverse' }}>
      <Image
        mx={{ base: 'auto', md: '0' }}
        src='https://avatars.githubusercontent.com/u/64031854?v=4'
        alt='Rahul SriRam'
        width={{ base: '180', md: '220' }}
        height={{ base: '180', md: '220' }}
        rounded='full'
        my={{ base: '8', md: '0' }}
      />
      <Flex
        justify='center'
        align='flex-start'
        direction='column'
        experimental_spaceY='4'>
        <Box mx={{ base: 'auto', md: '0' }}>
          <Heading as='h1' size='3xl' mb='1' ml='-1'>
            Rahul SriRam
          </Heading>
          <Heading
            as='h2'
            fontWeight='medium'
            size='md'
            bgGradient='linear(to-r, pink.500, yellow.400, purple.500)'
            bgClip='text'>
            <TypeWriter
              text={[
                'Full-Stack SDE',
                'Developer YouTuber',
                'Programming Content Creator',
                'Technical Writer',
              ]}
              eraseDelay={700}
              eraseSpeed={110}
              typingDelay={250}
              speed={110}
            />
          </Heading>
        </Box>
        <Text
          fontWeight='medium'
          maxW='md'
          color='gray.700'
          textAlign={['center', 'left']}
          _dark={{
            color: 'gray.300',
            fontWeight: 'normal',
          }}>
          I am a Full Stack Developer &amp; YouTuber. I 💖 JavaScript. Associate
          SDE at{' '}
          <Link fontWeight='semibold' href='https://apxor.com' isExternal>
            <Flex align='center' display='inline-flex'>
              <span>Apxor Technology Solutions</span>{' '}
              <Icon as={ExtLinkIcon} mx='2px' />
            </Flex>
          </Link>
        </Text>
        <Flex
          align='center'
          justify='center'
          mx={{ base: 'auto', md: 0 }}
          w='full'>
          <Link href='https://github.com/theskinnycoder' isExternal>
            <IconButton
              colorScheme='gray'
              variant='ghost'
              aria-label='Visit my GitHub'
              size='lg'
              fontSize='2xl'
              icon={<GitHubIcon />}
            />
          </Link>
          <Link href='https://instagram.com/_rahul.sriram_' isExternal>
            <IconButton
              colorScheme='purple'
              variant='ghost'
              aria-label='Visit my Insta'
              size='lg'
              fontSize='2xl'
              icon={<InstagramIcon />}
            />
          </Link>
          <Link href='https://twitter.com/theskinnycoder' isExternal>
            <IconButton
              colorScheme='twitter'
              variant='ghost'
              aria-label='Visit my Twitter'
              size='lg'
              fontSize='2xl'
              icon={<TwitterIcon />}
            />
          </Link>
          <Link
            href='https://www.linkedin.com/in/rahul-sriram-50a519173/'
            isExternal>
            <IconButton
              colorScheme='linkedin'
              variant='ghost'
              aria-label='Visit my LinkedIn'
              size='lg'
              fontSize='2xl'
              icon={<LinkedInIcon />}
            />
          </Link>
          <Link href='https://youtube.com/c/TheSkinnyCoder' isExternal>
            <IconButton
              colorScheme='red'
              variant='ghost'
              aria-label='Visit my YouTube Channel'
              size='lg'
              fontSize='2xl'
              icon={<YoutubeIcon />}
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
