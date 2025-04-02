import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItem({todo}) {  

    const [isEditable, setIseditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo || "");  
    const { toggleComplete, updateTodo, deleteTodo } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });  
        setIseditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div className='flex gap-3 justify-center items-center text-slate-600'>
            <input 
                type="checkbox"
                className='accent-amber-400 cursor-pointer w-4 h-4'
                checked={todo.complete}  
                onChange={toggleCompleted}
            />
            <input 
                type="text" 
                className={`py-2 pl-2 w-96 border-none outline-0 ${isEditable ? "ring-1 ring-blue-400 rounded-md" : "bg-transparent border-0"}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isEditable}
            />
            <button
                onClick={() => {
                    if (todo.complete) return;  
                    if (isEditable) {
                        editTodo();
                    } else {
                        setIseditable((prev) => !prev);
                    }
                }}
            >
                {isEditable ? "📁" : "✏️"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
                {"❌"}
            </button>
        </div>
    );
}

export default TodoItem;
