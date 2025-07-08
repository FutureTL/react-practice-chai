import { createContext, useContext } from "react";

//in the last project we had not given any default value in
//creating the context of the user. But here as we are setting the theme of a 
//page some default value is required, either light mode or dark mode.

//we pass an object in createContext({}) , this time.
export const ThemeContext = createContext({

    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}