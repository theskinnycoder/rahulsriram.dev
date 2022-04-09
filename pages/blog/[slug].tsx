import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { SWRConfig } from 'swr'
import BlogDetails from '~/components/pages/blog/BlogDetails'
import { graphcmsClient } from '~/lib/graphcms'
import { BASE_URL } from '~/utils/constants'

export default function PostDetailPage({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogDetails />
    </SWRConfig>
  )
}

export async function getStaticPaths() {
  const { articles: posts } = await graphcmsClient.GetAllArticles()
  const slugs = posts.map(post => post?.slug)

  return {
    paths: slugs.map(slug => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug as string

  const res = await fetch(`${BASE_URL}/api/blog/${slug}`)
  const data = await res.json()

  return {
    props: {
      fallback: {
        [`/api/blog/${slug}`]: data,
      },
    },
  }
}
