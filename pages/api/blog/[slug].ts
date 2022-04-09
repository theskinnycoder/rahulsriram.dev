import type { NextApiRequest, NextApiResponse } from 'next'
import { graphcmsClient } from '~/lib/graphcms'
import { Article } from '~/lib/graphcms/__generated__'
import { parseToMDX, Post } from '~/lib/mdx'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>,
) {
  const slug = req?.query?.slug as string
  const { article: post } = await graphcmsClient.GetSingleArticle({
    slug: req?.query?.slug as string,
  })

  const data = await parseToMDX({ slug, post } as {
    slug: string
    post: Article
  })

  res.status(200).json(data)
}
