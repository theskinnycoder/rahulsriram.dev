import { graphqlClient } from '~/lib/swr'
import { FAUNADB_END_POINT, FAUNADB_KEY } from '~/utils/constants'
import { getSdk } from './__generated__'

export const faundbClient = getSdk(
  graphqlClient(FAUNADB_END_POINT, FAUNADB_KEY),
)
