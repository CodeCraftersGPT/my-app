import React, { useContext }  from "react";

import {useTheme} from "./ThemeContext";
import SetTheme2 from "./SetTheme2";
import ThemeContext from "../../ThemeContext/ThemeContext";
function DashBoard2() {
    
        const {theme} = useTheme();   
        return (
            <div>
            <h1>DashBoard2</h1>
            <h3>Current Theme: {theme}</h3>
            <div style={{backgroundColor:theme === 'dark'? 'green':'white', color:theme === 'dark'? 'white':'black'}}>
                <h1>Child Component</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
                </p>
            </div>
            <SetTheme2 />
            </div>
        );
        }
        export default DashBoard2;