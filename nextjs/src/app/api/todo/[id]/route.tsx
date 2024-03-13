import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: Request, {params}: {params: {id: string}}){
    const todos = await prisma.todo.delete({
      where: {
        id: parseInt(params.id),
      },
    });

    if(!todos){
      return NextResponse.json("failed", {status: 404})
    }

    await revalidatePath("/")
    return NextResponse.json("success", {status: 200});
  }