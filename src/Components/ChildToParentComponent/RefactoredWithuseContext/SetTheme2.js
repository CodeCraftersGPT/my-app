import React,{useContext} from "react";

import ThemeContext from "./ThemeContext";
import { useTheme } from "./ThemeContext";

function SetTheme2() {
    
    const {changeTheme} = useTheme();
   
   

    // reflect only in the setTeheme2 component
    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
}

export default SetTheme2;