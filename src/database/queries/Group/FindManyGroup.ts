import prisma from '$database/prisma'
import { Group } from '@prisma/client'
  
export default async (data: Group[]) => {
  return await prisma.group.findMany({ where: { OR: [...data] } })
}