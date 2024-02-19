import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, fullname } = await req.json();

  try {
    if (name !== undefined && fullname !== undefined) {
      await prisma.user.create({
        data: {
          username: name,
          name: fullname,
        },
      });
      return Response.json({ message: "" });
    }
  } catch (error) {
    return Response.json({ message: error });
  }
}
