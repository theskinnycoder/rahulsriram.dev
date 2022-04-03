import { graphqlClient } from '~/lib/swr'
import { FAUNDB_END_POINT, FAUNDB_KEY } from '~/utils/constants'
import { getSdk } from './__generated__'

export const faundbClient = getSdk(
  graphqlClient(FAUNDB_END_POINT!, FAUNDB_KEY!),
)
