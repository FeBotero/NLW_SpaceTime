import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', async (req, res) => {
  const user = await prisma.user.findMany()
  return user
})

app
  .listen({ port: 3333 })
  .then(() => console.log(`👌 HTTP server on runner http://localhost:3333 `))
