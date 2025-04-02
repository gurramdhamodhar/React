import React, {useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(),...todo},...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevEachTodo) => prevEachTodo.id === id ? todo : prevEachTodo ));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((e) => e.id !== id ));
  };

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevEachTodo) => prevEachTodo.id === id ? {...prevEachTodo, complete : !prevEachTodo.complete} : prevEachTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='h-screen flex flex-col justify-start items-center my-10'>
        <h1 className='text-xl font-semibold my-8 text-slate-600'>Add Task, Perform Task, Mark Task </h1>
        <TodoForm />
        {todos.map((todo) => (
          <div key={todo.id} className='pt-10'>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  )
}

export default App