import { Hono } from 'hono'

// Contains only routes; no Node-specific APIs. The same app can be deployed directly to Vercel or Cloudflare Workers,
// or started on Node.js by src/node.ts.
const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

export default app
