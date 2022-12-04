import prisma from '$database/prisma'
import { User } from '@prisma/client'

const CreateUser = async (data: User) => {
  return await prisma.user.create({
    data
  })
}

export default CreateUser