import { ActionIcon, Anchor, Group, Stack, Text, Title } from '@mantine/core'
import NextImage from 'next/image'
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
    <Group
      position='apart'
      align='center'
      mx='auto'
      noWrap={false}
      sx={{
        flexDirection: 'row-reverse',
        width: '100%',
        '@media (max-width: 768px)': {
          justifyContent: 'center',
          flexDirection: 'row',
        },
      }}
    >
      <NextImage
        src='https://avatars.githubusercontent.com/u/64031854?v=4'
        alt='Rahul SriRam'
        width='200px'
        height='200px'
        style={{
          borderRadius: '50%',
        }}
      />
      <Stack
        py='lg'
        spacing='xs'
        sx={{
          maxWidth: '68%',
          '@media (max-width: 768px)': {
            maxWidth: '100%',
            alignItems: 'center',
          },
        }}
      >
        <Title
          order={1}
          sx={theme => ({
            paddingBottom: 0,
            marginBottom: 0,
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          })}
        >
          Rahul SriRam
        </Title>
        <Text
          component='h2'
          variant='gradient'
          gradient={{ from: 'red', to: 'yellow', deg: 45 }}
          weight='600'
          sx={{
            paddingTop: 0,
            marginTop: 0,
          }}
        >
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
        </Text>
        <Text
          sx={{
            '@media (max-width: 768px)': {
              textAlign: 'center',
            },
          }}
        >
          Full Stack Developer &amp; YouTuber. <br />
          Associate SDE at{' '}
          <Anchor
            sx={theme => ({
              color: theme.colorScheme === 'light' ? 'black' : 'white',
              fontWeight: '600',
            })}
            href='https://apxor.com'
            target='_blank'
          >
            <Group
              align='center'
              spacing={0}
              sx={{
                display: 'inline-flex',
              }}
            >
              <span>Apxor Technology Solutions</span>
              <ExtLinkIcon />
            </Group>
          </Anchor>
        </Text>
        <Group align='center' spacing='xs'>
          <ActionIcon
            radius='md'
            size='xl'
            variant='hover'
            component='a'
            href='https://github.com/theskinnycoder'
            target='_blank'
            color='gray'
          >
            <GitHubIcon fontSize='25px' />
          </ActionIcon>
          <ActionIcon
            size='xl'
            radius='md'
            variant='hover'
            component='a'
            href='https://instagram.com/_rahul.sriram_'
            target='_blank'
            color='violet'
          >
            <InstagramIcon fontSize='25px' />
          </ActionIcon>
          <ActionIcon
            radius='md'
            size='xl'
            variant='hover'
            component='a'
            href='https://twitter.com/theskinnycoder'
            target='_blank'
            color='twitter'
          >
            <TwitterIcon fontSize='25px' />
          </ActionIcon>
          <ActionIcon
            radius='md'
            size='xl'
            variant='hover'
            component='a'
            href='https://www.linkedin.com/in/rahul-sriram-50a519173/'
            target='_blank'
            color='linkedin'
          >
            <LinkedInIcon fontSize='25px' />
          </ActionIcon>
          <ActionIcon
            radius='md'
            size='xl'
            variant='hover'
            component='a'
            href='https://youtube.com/c/TheSkinnyCoder'
            target='_blank'
            color='red'
          >
            <YoutubeIcon fontSize='25px' />
          </ActionIcon>
        </Group>
      </Stack>
    </Group>
  )
}
