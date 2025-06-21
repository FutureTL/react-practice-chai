import { useState } from 'react'
import './App.css'
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-300 text-black mb-4'>Tailwind CSS</h1>
     <Card/>
     <Card/>

       
    </>
  )
}

export default App
