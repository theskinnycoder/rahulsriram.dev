import type { NextApiRequest, NextApiResponse } from 'next'
import { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } from '~/utils/constants'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&type=video&order=date&maxResults=4`,
  )
  const { items: videos } = await response.json()

  res.status(200).json(videos)
}
