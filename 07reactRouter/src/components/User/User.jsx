import React from "react";
import { useParams } from "react-router-dom";

//in main.jsx, we have used userid after the colon, so its access is available to us in this component User which 
//is rendered there.
//the useParams method always us the access of the variable we created in main.jsx
//and then in this component allows us to use it. 
//REMEMBER: we have to use the same name we have used in the route, because 
//if we see clearly we are extracting it from useParams. 
// We now have the power to deal with dynamic data.

//what we have essentially done using this: we now have the power to extract some unique id from the url and using that we can perform 
//any desired action like in my blogging app, i need to fetch all the details of a writer then their profile is visited, now I can do it using this method.
function User(){

    const {userid} = useParams();

    return(
        <>
        <div> User: {userid}</div>
        </>
    )
}

export default User;