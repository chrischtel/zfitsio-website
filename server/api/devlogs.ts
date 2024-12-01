// server/api/devlogs.ts
// server/api/devlogs.ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// server/api/devlogs.ts
export default defineEventHandler(async (event) => {
    // GET all devlogs
    if (event.method === 'GET') {
      return await prisma.devlog.findMany({
        include: { tags: true },
        orderBy: { date: 'desc' }
      })
    }
   
    // POST new devlog
    if (event.method === 'POST') {
      const body = await readBody(event)
      return await prisma.devlog.create({
        data: {
          title: body.title,
          content: body.content,
          version: body.version,
          date: new Date(),
          tags: {
            create: body.tags.map((tag: string) => ({
              name: tag
            }))
          }
        },
        include: { tags: true }
      })
    }
   
    // PUT update devlog
    if (event.method === 'PUT') {
      const body = await readBody(event)
      return await prisma.devlog.update({
        where: { id: body.id },
        data: {
          title: body.title,
          content: body.content,
          version: body.version,
          tags: {
            deleteMany: {},
            create: body.tags.map((tag: string) => ({
              name: tag
            }))
          }
        },
        include: { tags: true }
      })
    }
   
  // DELETE devlog
  if (event.method === 'DELETE') {
    try {
      const body = await readBody(event)
      
      // First delete all associated tags
      await prisma.tag.deleteMany({
        where: {
          devlogId: body.id
        }
      })

      // Then delete the devlog
      return await prisma.devlog.delete({
        where: { id: body.id }
      })
    } catch (error) {
      throw createError({
        statusCode: 500,
        message: 'Failed to delete devlog'
      })
    }
  }
   })