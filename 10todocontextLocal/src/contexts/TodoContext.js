//here we will create the basic context for our todo

import React,{ createContext, useContext } from "react";

//here when we define the context, we define what all methods and values we have,
//but don't define the exact functionality in those methods. 
//The functionalities are usually defined in some other file or app.jsx

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: " Todo msg",
            completed: false
        }
        //for now we have just defined a sample of a todo we will modify it later.
    ],
    //here we define all the methods that can be performed on that todo: add new todo, update a todo, delete a todo, toggle function that marks the todo if its completed.
    //in updateTodo, we have given both access to the id as well as todo because the data in the todo also has to be updated.
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});


export const TodoProvider = TodoContext.Provider;


export const useTodo = () => {
    return useContext(TodoContext)

}

