import React from 'react';
import TodoCard from './TodoCard';

function TodoList({ data }: {data: any}) {
  return (
    <section className=''>
      {data ? (
        data.map((todo:any, index: number) => <TodoCard id={todo.id} key={index} title={todo.title} />)
      ) : (
        <p>No Todos were found...</p>
      )}
    </section>
  );
}

export default TodoList;