import {
  Button,
  Group,
  MantineTheme,
  useMantineColorScheme,
} from '@mantine/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { SettingsModalToggleButton } from './features/settings'
import { SideBarToggleButton } from './features/sidebar'
import links from './links'

export default function Header() {
  const { asPath } = useRouter()
  const { colorScheme } = useMantineColorScheme()

  const linkColor = (theme: MantineTheme, url: string) => {
    if (asPath === url) {
      return colorScheme === 'light' ? 'black' : 'white'
    } else {
      return colorScheme === 'light'
        ? theme.colors.dark[4]
        : theme.colors.dark[1]
    }
  }

  return (
    <Group
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
        zIndex: '10',
        position: 'sticky',
        top: 0,
      }}
    >
      <Group
        position='apart'
        align='center'
        sx={theme => ({
          paddingBlock: theme.spacing.xl,
          maxWidth: '700px',
          width: '100%',
          '@media (max-width: 768px)': {
            paddingInline: theme.spacing.xs,
            paddingBlock: theme.spacing.xs,
          },
        })}
        mx='auto'
      >
        <Group
          sx={{
            '@media (max-width: 768px)': {
              display: 'none',
            },
          }}
          align='center'
          position='center'
          spacing='xs'
          ml={-14}
        >
          {links?.map(link => (
            <NextLink key={link?.name} href={link?.url} passHref>
              <Button
                variant='subtle'
                component='a'
                size='sm'
                sx={theme => ({
                  fontSize: theme.fontSizes.md,
                  color: linkColor(theme, link?.url),
                  textDecoration: 'none',
                  outline: 'none',
                  fontWeight: asPath === link?.url ? '600' : '500',
                  transition: 'all ease-in-out 0.2s',
                  ':hover': {
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.gray
                        : 'unset',
                    outline:
                      theme.colorScheme === 'light' ? '2px solid' : 'none',
                    outlineColor:
                      theme.colorScheme === 'light'
                        ? theme.black
                        : 'transparent',
                    transition: 'all ease-in-out 0.2s',
                  },
                })}
              >
                {link?.name}
              </Button>
            </NextLink>
          ))}
        </Group>
        <SideBarToggleButton />
        <SettingsModalToggleButton />
      </Group>
    </Group>
  )
}
