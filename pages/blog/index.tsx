import { InferGetStaticPropsType } from 'next'
import { SWRConfig } from 'swr'
import BlogsListing from '~/components/pages/blog/BlogsListing'
import { BASE_URL } from '~/utils/constants'

export default function BlogListPage({
  fallback,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <SWRConfig value={{ fallback, suspense: true }}>
      <BlogsListing />
    </SWRConfig>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${BASE_URL}/api/blog`)
  const data = await res.json()

  return {
    props: {
      fallback: {
        '/api/blog': data,
      },
    },
  }
}
