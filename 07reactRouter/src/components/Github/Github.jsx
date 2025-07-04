import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){

    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
        
    //     fetch('https://api.github.com/users/FutureTL')
    //     .then(res=> res.json())
    //     .then(data=> {
    //         console.log(`data obtained from github api call: ${data}`);
    //         setData(data);
    //     })

    // }, [])

    return(
        <div> Github followers: {data.followers}</div>
    )
}
export default  Github;

export const githubInfoLoader = async() => {

    const response = await fetch('https://api.github.com/users/FutureTL')
    // console.log(`github api response: ${response.json()}`);
    return response.json()
    //note: we are able to directly return the json reponse, no useState or useEffect needed.

}
