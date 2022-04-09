import { Anchor, Divider, Drawer, Stack, Title } from '@mantine/core'
import NextLink from 'next/link'
import links from '~/components/links'

interface SideBarProps {
  opened: boolean
  onClose: () => void
}

export default function SideBar({ opened, onClose }: SideBarProps) {
  return (
    <Drawer
      transitionDuration={350}
      overlayOpacity={0}
      padding='xl'
      sx={{
        backdropFilter: 'blur(10px)',
      }}
      shadow='xl'
      opened={opened}
      onClose={onClose}
      size='md'
      title={
        <Title
          sx={theme => ({
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
          })}
          order={3}
        >
          Rahul SriRam
        </Title>
      }
      withCloseButton
    >
      <Divider py={6} size='xs' variant='dotted' />
      <Stack justify='center' align='end'>
        {links?.map(link => (
          <NextLink key={link?.name} href={link?.url} passHref>
            <Anchor
              weight='500'
              variant='text'
              onClick={onClose}
              sx={theme => ({
                fontSize: 1.2 * theme.fontSizes.xl,
              })}
            >
              {link?.name}
            </Anchor>
          </NextLink>
        ))}
      </Stack>
    </Drawer>
  )
}
