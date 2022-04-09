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
      icon: <AppleIcon fontSize='30px' />,
    },
    {
      name: 'Fifine K669B Condensor Mic',
      subText: '1.5W, 1.5m, 1.5m',
      icon: <MicIcon fontSize='30px' />,
    },
    {
      name: 'Canon EOS 1200D',
      subText: 'EF-S 18-55mm IS STM Lens',
      icon: <CameraIcon fontSize='30px' />,
    },
  ],
  coding: [
    {
      name: 'Visual Studio Code',
      subText: `${(<a href={VSCODE_SETTINGS_GIST_ID}>settings</a>)}. And ${(
        <a href={VSCODE_EXTENSIONS_BLOG_POST}>extensions</a>
      )}`,
      icon: <VSCodeIcon fontSize='30px' color='#46AAE9' />,
    },
    {
      name: 'iTerm2',
      subText: {
        config: {},
      },
      icon: <ITermIcon fontSize='30px' />,
    },
    {
      name: 'Fonts',
      subText: {},
      icon: <FontIcon fontSize='30px' />,
    },
  ],
  software: [
    {
      name: 'Adobe Premiere Pro CC',
      subText: 'Video Editing',
      icon: <PremiereProIcon fontSize='30px' color='#000058' />,
    },
    {
      name: 'Descript',
      subText: 'Audio Editing',
      icon: <DescriptIcon fontSize='30px' color='#46AAE9' />,
    },
    {
      name: 'Canva',
      subText: 'Poster & Thumbnail Design',
      icon: <CanvaIcon fontSize='30px' color='#02C3CC' />,
    },
    {
      name: 'Raycast',
      subText: 'Replacement for Spotlight',
      icon: <SpotlightIcon fontSize='30px' color='#FF6161' />,
    },
  ],
  work: [
    {
      name: 'GitHub',
      subText: 'Personal Favorite',
      icon: <GitHubIcon fontSize='30px' />,
    },
    {
      name: 'GitLab',
      subText: 'For Work',
      icon: <GitLabIcon fontSize='30px' color='#E24124' />,
    },
    {
      name: 'Slack',
      subText: 'For Work',
      icon: <SlackIcon fontSize='30px' />,
    },
    {
      name: 'Discord',
      subText: 'For Community Building',
      icon: <DiscordIcon fontSize='30px' color='#626DEC' />,
    },
  ],
}

export default usesData
