import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  
  const [length, setLength]= useState(8)
  const [addNumber, setAddNumber]= useState(false)
  const [addChar, setAddChar] = useState(false)
  const [password, setPassword]= useState()
  //so these are the four states that we will be using. Right now we will not
  //focus on how the random passwords will be generated.

  //useRef hook:
  const passwordRef = useRef(null)

  //we will be using the callback hook. the generate password function should be
  //run if the addnumber is checked true or if addcharacter is checked true. This means, this 
  //function "generate password" is dependant on these 2 states. then what are the dependencies 
  //of this function: addNumber, addChar, and if any more.

  //read about useCallback hook:
  const generatePassword = useCallback(() =>
    {
      let pass= "" //this variable will hold the password
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      // from this str we will randomly choose numbers to be added in the password we are creating.

      if(addNumber) str += "0123456789"
      if(addChar) str +=  "!@#$%^&*()_-+=[{]};:,<.>/?"

      for(let i=1;i<=length;i++){
        let char = Math.floor(Math.random()* (str.length) + 1)

        pass += str.charAt(char)
      }
      setPassword(pass)


    },
     [length, addNumber, addChar, setPassword])

  //as we are working in core react, so we are able to write window
  //like this in the function , but if we are working in nextJs, it has
  //server-side rendering, so this window object is not available there.
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select() //because of this the selected password will get highlighted.
    passwordRef.current?.setSelectionRange(0,100)

    window.navigator.clipboard.writeText(password)
  }, [password])

  //here we will be using useEffect hook
  //runs automatically when page is loaded, along with running
  //when these dependencies change.
  useEffect(()=> {
    generatePassword()
  },[length, addChar, addNumber, generatePassword])

  //till now we have not done anything with the copy button.
  //challenges: 1.we want to copy only the password. how to know what to copy?
              //2. we want to copy to clipboard. so how to get its access
              //3. we might not want to copy the entire password but a portion of it. how to do that?
  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-5">
        <input
            type="text"
            value={password}
            className='outline-white w-full py-1 px-3 bg-white'
            placeholder="Password"
            readOnly   
            ref = {passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 mr-3'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange= {(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>

       <div className="flex items-center gap-x-1 mr-3">
      <input
          type="checkbox"
          defaultChecked={addNumber}
          id="numberInput"
          onChange={() => {
              setAddNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>

       <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={addChar}
              id="characterInput"
              onChange={() => {
                  setAddChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
       </div>

      </div>
    </div>
      
    </>
  )
}

export default App
