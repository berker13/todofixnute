"use server"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function getTodos(){
    const todos = await prisma.todo.findMany({})
    if(!todos) return null;
    return todos;
}

export async function addTodo(title: string){
    const todo = await prisma.todo.create({
        data:{
            title: title.toString(),
        },
    });
    if(!todo) return null;
    revalidatePath("/")
}

export async function delTodo(id: number){
    const todo = await prisma.todo.delete({
        where:{
            id: id,
        },
    });
    if(!todo) return null;
    revalidatePath("/")
}