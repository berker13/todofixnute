import React from 'react';
import { delTodo } from '../lib/prisma';
import { time } from 'console';
import { title } from 'process';

type Props = {
  title: string;
  completed?: boolean;
  id: number;
};

function TodoCard({title, completed, id}: Props) {

  async function handleDelete(){
    "use server"
    try {
      const todo = await delTodo(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form action={handleDelete}>
      <div className='card select-none cursor-pointer'>
        <div className='card__wrapper flex justify-between p-4 border'>
          <p className='text-lg font-semibold'>{title}</p>
          <button className='hotovo text-blue-500 hover:text-blue-700'>
Odstranit          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoCard;