import { Hono, MiddlewareHandler } from 'hono'

const app = new Hono()

const authMiddleware: MiddlewareHandler = async (c, next) => {
  // context of this request, request, response
  if (c.req.header("Authorization")) {
    await next()
  } else {
    return c.text("You don't have access")
  }
}

// fetch => json
app.post('/', authMiddleware, async (c) => {
  const body = await c.req.json()

  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app