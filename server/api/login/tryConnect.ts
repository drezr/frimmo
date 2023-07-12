import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

import crypto from 'crypto'

export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const params: any = getQuery(e)

  const user = await prisma.user.findUnique({
    where: {
      email: params.email,
    },
  })

  if (user) {
    const newHash = crypto
      .pbkdf2Sync(params.password, user.salt, 1000, 64, 'sha512')
      .toString('hex')

    if (newHash == user.password) {
      setResponseStatus(e, 202)

      return {
        userId: user.id,
        email: user.email,
        token: user.token,
      }
    } else {
      return 'badPassword'
    }
  } else {
    return 'userDoesNotExist'
  }
})
