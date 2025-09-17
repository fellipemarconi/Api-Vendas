import { DB } from './types'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const dialect = new PostgresDialect({
  pool: new Pool({
    max: 1,
    min: 1,
    connectionString: process.env.DATABASE_URL,
  }),
})

export const db = new Kysely<DB>({
  dialect,
})
