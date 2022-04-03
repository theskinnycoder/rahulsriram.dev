import type { NextApiRequest, NextApiResponse } from 'next'
import { graphcmsClient } from '~/lib/graphcms'
import { Article } from '~/lib/graphcms/__generated__'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    post: Article
  }>,
) {
  const { article } = await graphcmsClient.GetSingleArticle({
    slug: req?.query?.slug as string,
  })
  res.status(200).json({ post: article as Article })
}
