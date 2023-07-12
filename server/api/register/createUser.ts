import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

import crypto from 'crypto'

export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const params: any = getQuery(e)

  const emailExist = await prisma.user.findUnique({
    where: {
      email: params.email,
    },
  })

  if (!emailExist) {
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto
      .pbkdf2Sync(params.password, salt, 1000, 64, 'sha512')
      .toString('hex')

    //const newHash = crypto.pbkdf2Sync(re_entered_password, salt, 1000, 64, 'sha512').toString('hex')

    const newUser = await prisma.user.create({
      data: {
        email: params.email,
        password: hash,
        salt: salt,
        token: uuidv4().replaceAll('-', ''),
      },
    })
    return 'success'
  } else {
    return 'emailExist'
  }
})
