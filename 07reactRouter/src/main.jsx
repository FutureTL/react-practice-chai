import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'


// const router= createBrowserRouter([

//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact-us",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//the above one is one way of creating routes. Another way also uses
//createBrowserRouter only but inside we use another method:

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element= {<Layout/>} >
        <Route path='' element ={<Home/> } />
        <Route path='about' element = { <About/> } />
        <Route path='contact-us' element = { <Contact/>} />
        <Route path= 'user/:userid' element ={<User/>}  />
        <Route 
        loader= {githubInfoLoader}
        path='github' 
        element={<Github/>}  />
    </Route>
  )//what ever we have written after the colon, like in our case we have written userid, then its
  //access is available to us inside the User component, that is which ever component we have rendered with it.
)
//this 2nd method seems to be more intuitive than the first one.We can clearly visualize an outer router and
//various routes inside it as its children. 
//here in the github route we have injected the loader. we can directly write the fetch api here only in the form of a callback,
//or we can pass a method to the loader.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)

// routerProvider requires a prop, here that is router and we have declared it above.
//about and other options that come are treated as children of home route. like nesting is taking place.