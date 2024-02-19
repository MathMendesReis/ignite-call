import { prisma } from '@/lib/prisma'

export async function GET() {
    const newuser = await prisma.user.findMany()
    return Response.json({ message: newuser })
}