import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response){
  const todos = await prisma.todo.findMany();

  if(!todos){
    return NextResponse.json("failed")
  }
  return NextResponse.json(todos, {status: 200});
}

export async function POST(req: Request, res: Response){
  const params = await req.json();
  const todos = await prisma.todo.create({
    data: {
      title: params,
    },
  });
  
  if(!todos){
    return NextResponse.json("failed")
  }

  revalidatePath("/")
  return NextResponse.json(todos, {status: 200});
}