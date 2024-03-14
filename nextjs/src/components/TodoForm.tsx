"use client"

import { useState, FormEvent } from 'react';
import { addTodo } from '../lib/prisma';

export default function TodoForm() {
    const [title, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAddTodo = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if(title.length > 0){
                const todo = await addTodo(title.toString());
                setBody('');
            }

        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

  return (
    <form onSubmit={handleAddTodo} className='mainform flex flex-row border'>
      <input
        type='text'
        name='body'
        value={title}
        onChange={(e) => setBody(e.target.value)}
        className='ml-2 w-full outline-none text-red '
        placeholder='Napiš sem něco..'
      />
      <input
        type='submit'
        className='hahaha p-2 ml-auto bg-red-500 hover:bg-blue-700 cursor-pointer'
        value={isLoading ? 'Adding...' : 'Přidat task'}
        disabled={isLoading}
      />
    </form>
  );
}