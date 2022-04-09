import { formatDistanceToNow } from 'date-fns'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import { Article } from '~/lib/graphcms/__generated__'

export interface Post {
  meta: {
    title: string
    excerpt: string
    slug: string
    date: string
    timeTaken: string
  }
  content: MDXRemoteSerializeResult<Record<string, unknown>>
}

interface parseToMDXProps {
  slug: string
  post: Article
}

export async function parseToMDX({
  slug,
  post,
}: parseToMDXProps): Promise<Post> {
  return {
    meta: {
      title: post?.title,
      excerpt: post?.excerpt!,
      slug,
      date: formatDistanceToNow(new Date(post?.updatedAt!), {
        addSuffix: true,
        includeSeconds: true,
      }),
      timeTaken: readingTime(post?.content!).text,
    },
    content: await serialize(post?.content!, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    }),
  }
}
