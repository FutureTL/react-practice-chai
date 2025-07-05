import React, {useContext, useState} from "react";
import UserContext from "../Context/UserContext";

//logic: user is putting his details, we have taken those details and put then in a context, imagine 
//like a global varibal, called userContext, 
//Next step: we will fetch that user data and do some manipulation with it, maybe display it or something.
function Login(){

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    //here I have defined two states, for updating username and password

    const {setUser} = useContext(UserContext)

    //this is the method we have defined, and this function will run when the button is clicked.
    //in this entire process we have set some data in the userContext. Next we will learn in the profile.jsx that how can 
    //we now get data stored in the context and do whatever manipulations we want with it.
    const handleSubmit = (e) => {
        
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <>
        <div>
            <input 
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
             />
            { " " }
            <input 
            type="text" 
            placeholder="password" 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            />

            <button
                onClick={handleSubmit}> 
                submit 
            </button>
        </div>
         </>
    )
}

export default Login;