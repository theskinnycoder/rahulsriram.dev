import {
  Anchor,
  Blockquote,
  Box,
  Code,
  Divider,
  Image,
  List,
  Table,
  Text,
  Title,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import NextLink from 'next/link'
import { Language } from 'prism-react-renderer'

const CustomLink = props => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Anchor {...props} />
      </NextLink>
    )
  }

  return (
    <Anchor
      sx={theme => ({
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      })}
      target='_blank'
      {...props}
    />
  )
}

const MDXComponents = {
  h1: props => <Title order={1} my='md' {...props} />,
  h2: props => <Title order={2} my='md' {...props} />,
  h3: props => <Title order={3} my='md' {...props} />,
  h4: props => <Title order={4} my='md' {...props} />,
  h5: props => <Title order={5} my='md' {...props} />,
  h6: props => <Title order={6} my='md' {...props} />,
  pre: props => (
    <Prism
      my='md'
      sx={theme => ({
        colorScheme: theme.colorScheme,
      })}
      language={props?.children?.props?.className?.split('-')[1] as Language}
    >
      {props?.children?.props?.children}
    </Prism>
  ),
  code: props => (
    <Code
      my='md'
      sx={theme => ({
        overflowX: 'scroll',
        wordBreak: 'break-word',
        colorScheme: theme.colorScheme,
        fontSize: theme.fontSizes.sm,
      })}
    >
      {props.children}
    </Code>
  ),
  br: props => <Box my='md' {...props} />,
  hr: props => <Divider my='md' {...props} />,
  a: CustomLink,
  p: props => (
    <Text
      weight={400}
      my='md'
      sx={{
        lineHeight: '1.8',
      }}
      {...props}
    />
  ),
  img: props => {
    return (
      <Image
        radius='md'
        my='md'
        mx='auto'
        alt={props?.alt}
        src={props?.src}
        sx={{
          maxWidth: '300px',
        }}
      />
    )
  },
  ul: props => <List type='unordered' as='ul' my='md' {...props} />,
  ol: props => <List type='ordered' my='md' {...props} />,
  li: props => <List.Item my='md' {...props} />,
  table: Table,
  blockquote: props => (
    <Blockquote
      my='md'
      {...props}
      sx={{
        fontWeight: 'normal',
      }}
    />
  ),
}

export default MDXComponents
