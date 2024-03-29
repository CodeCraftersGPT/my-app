// create dashboard1 component
// define function to change the theme from dark to light and vice versa
// pass the function to the SetTheme component
//

import React, { useState } from "react";

import SetTheme from "./SetTheme";

function DashBoard1() {

    // dashboard component will have a state to keep track of the current theme

    // we will lift the state u to theme context which will be the parent of the dashboard component
    const [theme, setTheme] = useState("light");
    
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    return (
        <div>
        <h1>DashBoard1</h1>
        <h3>Current Theme: {theme}</h3>
        {/* define lorem ipsum text with the if it is dark it will apply green back ground with white color
        else white background with green color */}
        <div style={{backgroundColor:theme === 'dark'? 'green':'white', color:theme === 'dark'? 'white':'black'}}>
            <h1>Child Component</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
        </div>
        <SetTheme updateTheme={changeTheme} />
        </div>
    );
    }

export default DashBoard1;

