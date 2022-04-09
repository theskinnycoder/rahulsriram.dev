import { ActionIcon, Affix, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ArrowUpIcon } from '~/icons'

export default function ScrollToTopAffix() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <Affix position={{ bottom: 30, right: 40 }}>
        <Transition transition='slide-up' mounted={scroll.y > 0}>
          {transitionStyles => (
            <>
              <ActionIcon
                size='xl'
                variant='light'
                sx={theme => ({
                  borderRadius: theme.radius.xl,
                  fontSize: theme.fontSizes.xl,
                })}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
              >
                <ArrowUpIcon />
              </ActionIcon>
            </>
          )}
        </Transition>
      </Affix>
    </>
  )
}
