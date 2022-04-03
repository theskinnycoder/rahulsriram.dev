import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { SWRConfig, unstable_serialize } from 'swr'
import BlogDetails from '~/components/pages/blog/BlogDetails'
import { graphcmsClient } from '~/lib/graphcms'
import { GetSingleArticleDocument } from '~/lib/graphcms/__generated__'
import { getGqlString } from '~/lib/swr'
import { GRAPHCMS_END_POINT } from '../../utils/constants'

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

  const { article: post } = await graphcmsClient.GetSingleArticle({
    slug,
  })

  return {
    props: {
      fallback: {
        [unstable_serialize([
          GRAPHCMS_END_POINT,
          getGqlString(GetSingleArticleDocument),
          { slug },
        ])]: post,
      },
    },
  }
}
