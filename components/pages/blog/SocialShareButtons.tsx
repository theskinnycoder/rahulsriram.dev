import { ActionIcon, Group, Popover, Text } from '@mantine/core'
import { useState } from 'react'
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
  const [opened, setOpened] = useState(false)

  return (
    <Popover
      withArrow
      withCloseButton
      opened={opened}
      onClose={() => setOpened(false)}
      placement='end'
      position='bottom'
      target={
        <>
          <ActionIcon
            size='lg'
            radius='md'
            onClick={() => setOpened(o => !o)}
            sx={theme => ({
              color:
                theme.colorScheme === 'dark' ? theme.colors.gray[5] : 'initial',
              '@media (max-width: 768px)': {
                fontSize: theme.fontSizes.xs,
              },
            })}
          >
            <ShareIcon />
          </ActionIcon>
        </>
      }
    >
      <Text weight='600' mb='xs'>
        Share this article...
      </Text>
      <Group position='center' align='center' spacing='xs'>
        {/* Twitter */}
        <TwitterShareButton
          url={`https://rahulsriram.dev${path}`}
          title={title}
        >
          <ActionIcon color='twitter' size='lg' radius='md'>
            <TwitterFilledIcon />
          </ActionIcon>
        </TwitterShareButton>

        {/* FaceBook */}
        <FacebookShareButton
          url={`https://rahulsriram.dev${path}`}
          quote={title}
          hashtag={hashtag}
        >
          <ActionIcon color='facebook' size='lg' radius='md'>
            <FacebookFilledIcon />
          </ActionIcon>
        </FacebookShareButton>

        {/* Reddit */}
        <RedditShareButton url={`https://rahulsriram.dev${path}`} title={title}>
          <ActionIcon color='red' size='lg' radius='md'>
            <RedditIcon />
          </ActionIcon>
        </RedditShareButton>

        {/* WhatsApp */}
        <WhatsappShareButton
          url={`https://rahulsriram.dev${path}`}
          title={title}
          separator='-'
        >
          <ActionIcon color='whatsapp' size='lg' radius='md'>
            <WhatsAppIcon />
          </ActionIcon>
        </WhatsappShareButton>

        {/* LinkedIn */}
        <LinkedinShareButton
          url={`https://rahulsriram.dev${path}`}
          title={title}
          summary='Do check out other articles on this blog!'
        >
          <ActionIcon color='linkedin' size='lg' radius='md'>
            <LinkedInFilledIcon />
          </ActionIcon>
        </LinkedinShareButton>

        {/* Telegram */}
        <TelegramShareButton
          url={`https://rahulsriram.dev${path}`}
          title={title}
        >
          <ActionIcon color='telegram' size='lg' radius='md'>
            <TelegramIcon />
          </ActionIcon>
        </TelegramShareButton>
      </Group>
    </Popover>
  )
}
