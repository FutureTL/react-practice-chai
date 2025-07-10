import { useState } from 'react'
import './App.css'
import { TodoProvider, useTodo } from './contexts';

function App() {
  
  const [todos, setTodos]= useState([]);
  //in the initial value we have passed an empty array, because initially
  //we don't have any todo.

  //now i will try to define the functionality on my own.
  //addTodo
  const addTodo = (todo) => {
      // setTodos(todo) - i cannot write like this because then the previous all todos will get removed
      //we need access of the todos already present. we call these prev todos suppose.
      //we have learnt that prev state can be access using callback in setState function.
      setTodos((prevTodos) => [{ id: Date.now(), ...todo},...prevTodos] )
      //we have defined todo in the form of an object that is why we have written it in {} and inside that we had
      //to specify the id, and rest we have taken as it is so we use spread operator.
      //what we have done: injected a new todo at top and then taken the rest of the previously injected todos as it is.


  }


  //now we will write code for updating a todo:
  //why taken id: because our todos are present in the form of an array. So we will loop through that array 
  //and try to find the todo with the desired id, then only we can find and modify it.
  const updatedTodo = (id, todo ) => {

      setTodos(prevTodos => prevTodos.map((prevTodo)=> (prevTodo.id === id ? todo: prevTodo) ))
      //explain: we fetch all the previous todos using callback in setTodo function. 
      //now we loop through all the todos using map option. we can also use forEch method.
      //as we loop through for each prevTodo we check its id, if its id macthes with the id we are looking for
      //we put new todo(updated) in place of the previous one , if not we simply keep the previous one. 
     
  }

  const deleteTodo = (id) => {

      setTodos(prevTodo => (prevTodo.filter((todo)=> todo.id !== id)))
      //explain: we have not used the map method here because it is not suitable here.
      //a much better method is filter than only keeps todos who id doesnot match the specified id.
      //so it filter outs the id we dont need.
  }

  //now we have to work on toggleComplete- in this functionality, we have to go inside the specified
  //todo and toggle its completed state. If its true, make it false, and vice versa.
  
  const toggleComplete = (id) => {

      setTodos(prevTodo => prevTodo.map((todo)=> {
        if(todo.completed == true){
          todo.completed = false;
        }else{
          todo.completed = true;
        }
      }))
       
  }




  

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updatedTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
