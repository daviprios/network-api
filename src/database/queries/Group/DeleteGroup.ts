import prisma from '$database/prisma'
  
export default async (ID: number) => {
  return await prisma.group.delete({ where: { ID } })
}