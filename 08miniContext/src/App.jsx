import './App.css'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'


//now inside this UserContextProvider whatever components we put in, imagine they are the {children} being received in the UserContextProvider.jsx function
//go and see it.
function App() {
  

  return (
    <UserContextProvider>
      <Login />
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
