import { Icon } from '@chakra-ui/react'
import {
  AppleIcon,
  CameraIcon,
  CanvaIcon,
  DescriptIcon,
  DiscordIcon,
  FontIcon,
  GitHubIcon,
  GitLabIcon,
  ITermIcon,
  MicIcon,
  PremiereProIcon,
  SlackIcon,
  SpotlightIcon,
  VSCodeIcon,
} from '~/icons'
import {
  VSCODE_EXTENSIONS_BLOG_POST,
  VSCODE_SETTINGS_GIST_ID,
} from '~/utils/constants'

const usesData = {
  hardware: [
    {
      name: 'MacBook Pro (2021)',
      subText:
        'M1 Pro Processor, 10 core, 16GB RAM, 1TB SSD, 16-inch Display, Space Gray',
      icon: <Icon boxSize='2em' as={AppleIcon} />,
    },
    {
      name: 'Fifine K669B Condensor Mic',
      subText: '1.5W, 1.5m, 1.5m',
      icon: <Icon boxSize='2em' as={MicIcon} />,
    },
    {
      name: 'Canon EOS 1200D',
      subText: 'EF-S 18-55mm IS STM Lens',
      icon: <Icon boxSize='2em' as={CameraIcon} />,
    },
  ],
  coding: [
    {
      name: 'Visual Studio Code',
      subText: `${(<a href={VSCODE_SETTINGS_GIST_ID}>settings</a>)}. And ${(
        <a href={VSCODE_EXTENSIONS_BLOG_POST}>extensions</a>
      )}`,
      icon: <Icon boxSize='2em' as={VSCodeIcon} color='#46AAE9' />,
    },
    {
      name: 'iTerm2',
      subText: {
        config: {},
      },
      icon: (
        <Icon
          boxSize='2em'
          as={ITermIcon}
          color='green.600'
          _dark={{ color: 'green.500' }}
        />
      ),
    },
    {
      name: 'Fonts',
      subText: {},
      icon: <Icon boxSize='2em' as={FontIcon} />,
    },
  ],
  software: [
    {
      name: 'Adobe Premiere Pro CC',
      subText: 'Video Editing',
      icon: (
        <Icon
          boxSize='2em'
          as={PremiereProIcon}
          color='#000058'
          _dark={{
            color: '#9494F7',
          }}
        />
      ),
    },
    {
      name: 'Descript',
      subText: 'Audio Editing',
      icon: <Icon boxSize='2em' as={DescriptIcon} color='#46AAE9' />,
    },
    {
      name: 'Canva',
      subText: 'Poster & Thumbnail Design',
      icon: <Icon as={CanvaIcon} boxSize='2em' color='#02C3CC' />,
    },
    {
      name: 'Raycast',
      subText: 'Replacement for Spotlight',
      icon: <Icon boxSize='2em' as={SpotlightIcon} color='#FF6161' />,
    },
  ],
  work: [
    {
      name: 'GitHub',
      subText: 'Personal Favorite',
      icon: <Icon as={GitHubIcon} boxSize='2em' />,
    },
    {
      name: 'GitLab',
      subText: 'For Work',
      icon: <Icon as={GitLabIcon} boxSize='2em' color='#E24124' />,
    },
    {
      name: 'Slack',
      subText: 'For Work',
      icon: <Icon as={SlackIcon} boxSize='2em' />,
    },
    {
      name: 'Discord',
      subText: 'For Community Building',
      icon: <Icon as={DiscordIcon} boxSize='2em' color='#626DEC' />,
    },
  ],
}

export default usesData
