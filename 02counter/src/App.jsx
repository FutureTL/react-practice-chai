import { useState } from "react"



function App() {
  
  let [counter, setCounter]  = useState(15)// 15 represents the default value of the variable
  //useState return an array where the 0th index place has the variable whose
  //state is to be updated, 
  //1th index denotes the function that is called to do the updation and required parameter is passed
  
  const addValue = ()=>{
    if(counter <20){
      counter = counter+1
      //sometimes we want to update the state back to back we are writing like this 
      //just for understanding. So in this case the previous state is taken using a callback.

      setCounter(prevCounter=> prevCounter+1)
      setCounter(prevCounter=> prevCounter+1)
      console.log(`${counter}, ${Math.random()}`)
    }
}

const removeValue = ()=>{
    if(counter>0){
      counter = counter-1
      setCounter(counter)
      console.log(`${counter}, ${Math.random()}`)
    }
 
  }

  return (
    <>
    <h1>Count: {counter}</h1>  
    <button 
      onClick = {addValue}
    >Add value: {counter} </button>
    <br/>
    <button
      onClick={removeValue}
    >Remove value : {counter}</button>    
    </>
  )
}

export default App
