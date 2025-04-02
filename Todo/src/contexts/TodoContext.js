import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo : "Hello all",
            complete : false
        }
    ],

    addTodo : (todo) => {}, // here i need to pass/create todo array
    updateTodo : (id, todo) => {},  // here i need to pass the id and todo
    deleteTodo : (id) => {}, //here i need to pass whatever the element deleted id
    toggleComplete : (id) => {}, //here i need to pass whatever the element clicked
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;