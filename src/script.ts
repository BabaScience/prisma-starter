import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
  /* await prisma.user.deleteMany()
  const newUser = await prisma.user.createMany({  
    data: [
      {
        email: 'bamba@gmail.com',
        name: 'Bamba',
        age: 25,
        password: '123456',
        role: 'ADMIN'
      },
      {
        email: "doe@gmail.com",
        name: 'Doe',
        age: 30,
        password: '123456',
        role: 'USER'
      },
      {
        email: "Jacob@gmail.com",
        name: 'Jacob',
        age: 35,
        password: '123456',
        role: 'USER'
      },
      {
        email: "Jane@gmail.com",
        name: 'Jane',
        age: 40,
        password: '123456',
        role: 'USER'
      }
    ]
  }) */
  /* const newUser = await prisma.user.findMany({
    where: {
      OR: [
        { role: 'USER' },
        { age: { gte: 18}}
      ]
    },
    select: {
      name: true,
      email: true,
      age: true,
      role: true
    }
  }) */
  const newUser = await prisma.user.update({
    where: {
      email: "bamba@gmail.com"
    },
    data: {
      age: 27
    }
  })
  console.log("newUser", newUser)
}



main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })