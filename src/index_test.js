import test from 'ava'
import 'babel-register'

import { createContext } from './index'

test('creates a context with a bearer', async t => {
  const token = '123'
  const ctx = createContext({ token, fetch () {} })
  t.is(ctx.bearer, `Bearer ${token}`)
})
