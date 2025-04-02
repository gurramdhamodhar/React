import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");

    const { addTodo } = useTodo()

    const add = (e) => {
      e.preventDefault();
      if (!todo) return
      addTodo({todo, complete:false});
      setTodo("")
    };

  return (
    <form onSubmit={add}>
        <div className='flex gap-2'>
          <input 
              type="text" 
              placeholder='Write todo'
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className='w-96 py-2 pl-3 font-medium text-sm ring-1 ring-slate-800 focus:ring-amber-400 focus:outline-amber-400 border-none rounded-md'
          />
          <button type='submit' className='rounded-md bg-amber-600 text-white font-medium px-4 py-3'>
              Add
          </button>
        </div>
    </form>
  )
}

export default TodoForm