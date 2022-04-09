import { Divider, Stack } from '@mantine/core'
// import { InferGetStaticPropsType } from 'next'
// import { SWRConfig } from 'swr'
import HeroSection from '~/components/pages/home/HeroSection'
import TimeLineSection from '~/components/pages/home/TimeLineSection'
// import YouTubeSection from '~/components/pages/home/YouTubeSection'
// import { BASE_URL } from '~/utils/constants'

// export default function Home({
//   fallback,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <Stack px='0' spacing='xl'>
//       <HeroSection />
//       <Divider my='xl' size='xs' />
//       <TimeLineSection />
//       <Divider my='xl' size='xs' />
//       <SWRConfig value={{ fallback }}>
//         <YouTubeSection />
//       </SWRConfig>
//     </Stack>
//   )
// }

export default function Home() {
  return (
    <Stack px='0' spacing='xl'>
      <HeroSection />
      <Divider my='xl' size='xs' />
      <TimeLineSection />
    </Stack>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(`${BASE_URL}/api/youtube`)
//   const videos = await res.json()

//   return {
//     props: {
//       fallback: {
//         [`/api/youtube`]: videos,
//       },
//     },
//   }
// }
