import {
  Anchor,
  AspectRatio,
  Badge,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useHover } from '@mantine/hooks'
import NextLink from 'next/link'
import { Article } from '~/lib/graphcms/__generated__'

export default function BlogPost(post: Article) {
  const { title, excerpt, slug, coverpic, categories } = post
  const { hovered, ref } = useHover()

  return (
    <Card
      shadow='xs'
      p='md'
      ref={ref}
      radius='sm'
      sx={theme => ({
        transition: 'all 0.1s ease-in-out',
        ':hover': {
          transition: 'all 0.1s ease-in-out',
          outline: `2px solid ${
            theme.colorScheme === 'dark' ? theme.white : theme.black
          }`,
        },
      })}
    >
      <Card.Section
        component='a'
        href={`/blog/${slug}`}
        sx={{
          overflow: 'hidden',
        }}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image
            src={coverpic?.url}
            alt={title}
            fit='contain'
            sx={{
              transition: 'all 0.2s ease-in-out',
              objectPosition: 'center',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        </AspectRatio>
      </Card.Section>

      <Stack spacing='xs' align='flex-start' justify='space-between' my='lg'>
        <Group spacing='xs'>
          {categories?.map((category, idx) => (
            <NextLink href='/' key={idx} passHref>
              <Badge
                size='xs'
                sx={() => ({
                  cursor: 'pointer',
                })}
                color='green'
                variant='light'
                radius='sm'
                component='a'
              >
                {category?.name}
              </Badge>
            </NextLink>
          ))}
        </Group>
        <NextLink href={`/blog/${slug}`} passHref>
          <Anchor variant='text'>
            <Title
              order={3}
              mt={2}
              sx={theme => ({
                color: theme.colorScheme === 'dark' ? theme.white : theme.black,
                lineClamp: 2,
                maxLines: 2,
              })}
            >
              {title}
            </Title>
          </Anchor>
        </NextLink>
        <Text
          size='sm'
          sx={{
            lineClamp: 3,
            maxLines: 3,
          }}
        >
          {excerpt}
        </Text>
      </Stack>
    </Card>
  )
}
