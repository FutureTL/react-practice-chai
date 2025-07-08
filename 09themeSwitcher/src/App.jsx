import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider} from './contexts/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  
  const [themeMode, setThemeMode]= useState("light");

  //the name we have used for defining the two methods below should have 
  //the same name as the values obtained from the ThemeProvider. 
  //if we look closely, in the themeContext, we have not defined the functionality of darkTheme and lightTheme methods 
  //we have defined it here and it gets defined there also. something like global.

  const darkTheme = () => {
      setThemeMode("dark")
  }

  const lightTheme = () => {
      setThemeMode("light")

  }

  //actual change in theme:

  useEffect( () => {
    
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]
  //here we simply remove the mode that was previously set and set the current themeMode. don't
  //think this is toggle. it's not otherwise you will get confused.
)
  

  return (
    <>
    
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      {/* we import ThemeProvider from the theme context file we have created, and in the values we also 
      define the values that we have access to as part of that context.
      Basically, themeMode is initially set to light and using the 2 methods-
      darkTheme and lightTheme we set the themeMode to either light or dark. */}
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
        </div>
    </ThemeProvider>

     
    </>
  )
}

export default App
