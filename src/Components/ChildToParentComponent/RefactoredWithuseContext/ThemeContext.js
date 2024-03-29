
import React,{useState,useContext,createContext} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}
export const ThemeProvider = ({children}) => {

    //props.children
    const [theme, setTheme] = useState("dark");
    // it is not updating this
  
    // defined the function
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

