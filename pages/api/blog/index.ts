import type { NextApiRequest, NextApiResponse } from 'next'
import { graphcmsClient } from '~/lib/graphcms'
import { Article } from '~/lib/graphcms/__generated__'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{
    posts: Article[]
  }>,
) {
  const { articles } = await graphcmsClient.GetAllArticles()
  res.status(200).json({ posts: articles as Article[] })
}
