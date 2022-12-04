import prisma from '$database/prisma'
import { Group } from '@prisma/client'
  
export default async (ID: number, data: Group[]) => {
  return await prisma.group.update({ where: { ID }, data })
}