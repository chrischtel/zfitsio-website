// server/api/devlogs/[id].ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return await prisma.devlog.findUnique({
    where: { id: id || '' },
    include: { tags: true }
  })
})