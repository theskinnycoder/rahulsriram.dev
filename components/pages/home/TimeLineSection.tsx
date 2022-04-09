import { Text, Timeline, Title } from '@mantine/core'
import { ReactNode } from 'react'
import { CodeIcon, CollegeIcon, YoutubeIcon, WorkIcon } from '~/icons'

function CustomTimeLineTitle({ children }: { children: ReactNode }) {
  return (
    <Title
      order={4}
      sx={theme => ({
        marginBottom: -5,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      })}
    >
      {children}
    </Title>
  )
}

export default function TimeLineSection() {
  return (
    <>
      <Title
        order={2}
        sx={theme => ({
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        })}
      >
        My Timeline.
      </Title>
      <Timeline bulletSize={38} lineWidth={2}>
        <Timeline.Item
          bullet={<WorkIcon size={20} />}
          title={<CustomTimeLineTitle>Work</CustomTimeLineTitle>}
          lineVariant='dashed'
        >
          <Text color='dimmed' size='sm'>
            Started as an Associate Software Development Engineer at Apxor
            (Frontend Team)
          </Text>
          <Text size='xs' mt={4}>
            November, 2021
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<YoutubeIcon size={20} />}
          title={
            <CustomTimeLineTitle>Started YouTube Channel</CustomTimeLineTitle>
          }
          lineVariant='dashed'
        >
          <Text color='dimmed' size='sm'>
            My break-through, started TheSkinnyCoder, my YouTube channel. I post
            porgramming tutorials &amp; coding series.
          </Text>
          <Text size='xs' mt={4}>
            March 2020
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <CustomTimeLineTitle>CS Freshman, GVPCE(A)</CustomTimeLineTitle>
          }
          bullet={<CollegeIcon size={20} />}
          lineVariant='dashed'
        >
          <Text color='dimmed' size='sm'>
            Currently a senior, pursuing CS.
          </Text>
          <Text size='xs' mt={4}>
            2018-22, Started College
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <CustomTimeLineTitle>Started Web Development</CustomTimeLineTitle>
          }
          bullet={<CodeIcon size={20} />}
          lineVariant='dashed'
        >
          <Text color='dimmed' size='sm'>
            Learnt HTML5, CSS3, Vanilla JS.
          </Text>
          <Text size='xs' mt={4}>
            2014-16, High School
          </Text>
        </Timeline.Item>
      </Timeline>
    </>
  )
}
