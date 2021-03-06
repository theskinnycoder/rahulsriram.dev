import { graphqlClient } from '~/lib/swr'
import { GRAPHCMS_END_POINT, GRAPHCMS_KEY } from '~/utils/constants'
import { getSdk } from './__generated__'

export const graphcmsClient = getSdk(
  graphqlClient(GRAPHCMS_END_POINT, GRAPHCMS_KEY),
)
