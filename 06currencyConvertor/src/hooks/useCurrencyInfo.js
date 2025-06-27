//this is a custom hook we will be creating. In custom hooks we can use 
//the predefined react hooks also.
import { useEffect, useState } from "react";

//what is the aim of this hook:

function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json() )//the response that we get is in string format so we convert it to json. but we still aren't holding it anywhere, so we created a function setdata to set the value obtained in the data variable
        .then((res)=> setData(res[currency]))
        console.log(`the data obtained from the api response is ${data}`)
        return data
    }, [currency]) 
    //here we have specified currency as a dependency as when it changes , this code 
    //must run again.

}

export default useCurrencyInfo;
//we have designed a functionality and we are returning the entire function
