import {
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorMode,
} from '@chakra-ui/react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import {
  FacebookFilledIcon,
  LinkedInFilledIcon,
  RedditIcon,
  ShareIcon,
  TelegramIcon,
  TwitterFilledIcon,
  WhatsAppIcon,
} from '~/icons'

export default function SocialShareButtons({
  path,
  title,
  hashtag,
}: {
  path: string
  title: string
  hashtag: string
}) {
  const { colorMode } = useColorMode()

  return (
    <Popover placement='bottom-end' isLazy>
      <PopoverTrigger aria-label='Share this article'>
        <IconButton
          rounded='10px'
          _hover={{
            border: '2px solid',
            borderColor: 'gray.600',
          }}
          _dark={{
            _hover: {
              border: '2px solid',
              borderColor: 'gray.300',
            },
          }}
          fontSize={{ base: 'lg', md: 'xl' }}
          color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
          aria-label='Open Share Options'
          icon={<ShareIcon />}
          variant='ghost'
        />
      </PopoverTrigger>
      <PopoverContent
        bgColor='white'
        _dark={{
          bgColor: '#08070B',
        }}
        _focus={{
          ring: 'none',
        }}>
        <PopoverHeader fontWeight='semibold'>
          Share this article...
        </PopoverHeader>
        <PopoverArrow bgColor={colorMode === 'light' ? 'white' : '#08070B'} />
        <PopoverCloseButton
          autoFocus={false}
          ring='none'
          _focus={{ scale: 1.1 }}
        />
        <PopoverBody>
          <Flex display='inline-flex' align='center' justify='center'>
            {/* Twitter */}
            <TwitterShareButton
              url={`https://rahulsriram.dev${path}`}
              title={title}>
              <IconButton
                variant='ghost'
                rounded='10px'
                colorScheme='twitter'
                aria-label='Share article on Twitter'
                icon={<TwitterFilledIcon />}
              />
            </TwitterShareButton>

            {/* FaceBook */}
            <FacebookShareButton
              url={`https://rahulsriram.dev${path}`}
              quote={title}
              hashtag={hashtag}>
              <IconButton
                variant='ghost'
                rounded='10px'
                colorScheme='facebook'
                aria-label='Share article on FaceBook'
                icon={<FacebookFilledIcon />}
              />
            </FacebookShareButton>

            {/* Reddit */}
            <RedditShareButton
              url={`https://rahulsriram.dev${path}`}
              title={title}>
              <IconButton
                variant='ghost'
                rounded='10px'
                colorScheme='red'
                aria-label='Share article on Reddit'
                icon={<RedditIcon />}
              />
            </RedditShareButton>

            {/* WhatsApp */}
            <WhatsappShareButton
              url={`https://rahulsriram.dev${path}`}
              title={title}
              separator='-'>
              <IconButton
                variant='ghost'
                rounded='10px'
                colorScheme='whatsapp'
                aria-label='Share article on Whatsapp'
                icon={<WhatsAppIcon />}
              />
            </WhatsappShareButton>

            {/* LinkedIn */}
            <LinkedinShareButton
              url={`https://rahulsriram.dev${path}`}
              title={title}
              summary='Do check out other articles on this blog!'>
              <IconButton
                variant='ghost'
                rounded='10px'
                colorScheme='linkedin'
                aria-label='Share article on LinkedIn'
                icon={<LinkedInFilledIcon />}
              />
            </LinkedinShareButton>

            {/* Telegram */}
            <TelegramShareButton
              url={`https://rahulsriram.dev${path}`}
              title={title}>
              <IconButton
                variant='ghost'
                rounded='10px'
                colorScheme='telegram'
                aria-label='Share article on Telegram'
                icon={<TelegramIcon />}
              />
            </TelegramShareButton>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
