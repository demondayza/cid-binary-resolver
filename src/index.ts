import { Hono } from 'hono'
import { GenerateCID } from './utils'



interface Data {
  body: string
}

const app = new Hono()

app.put('/getcid', async (c) => {
  const data = await c.req.json<Data>()
  const base64 = data.body

  if (!base64) return c.notFound()
  let cid = await GenerateCID(base64);
  return c.json({ cid:cid })  

})


export default app
