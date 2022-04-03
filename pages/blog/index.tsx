import { InferGetStaticPropsType } from 'next'
import { SWRConfig, unstable_serialize } from 'swr'
import BlogsListing from '~/components/pages/blog/BlogsListing'
import { graphcmsClient } from '~/lib/graphcms'
import { GetAllArticlesDocument } from '~/lib/graphcms/__generated__'
import { getGqlString } from '~/lib/swr'
import { GRAPHCMS_END_POINT } from '~/utils/constants'

export default function BlogListPage({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SWRConfig value={{ fallback }}>
      <BlogsListing />
    </SWRConfig>
  )
}

export async function getStaticProps() {
  const { articles: posts } = await graphcmsClient.GetAllArticles()

  return {
    props: {
      fallback: {
        [unstable_serialize([
          GRAPHCMS_END_POINT,
          getGqlString(GetAllArticlesDocument),
        ])]: posts,
      },
    },
  }
}
