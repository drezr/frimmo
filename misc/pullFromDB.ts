const fs = require('fs')
const { PrismaClient } = require('@prisma/client')

async function run() {
  const prisma = new PrismaClient()

  const cats = await prisma.createAdCategory.findMany({
    include: {
      fields: true,
    },
  })

  fs.appendFile('misc/createAdSkeleton.json', JSON.stringify(cats), () => {
    console.log('misc/createAdSkeleton.json saved !')
  })
}

run()
