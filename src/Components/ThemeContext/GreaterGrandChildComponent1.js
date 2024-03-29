// create GreaterGrandChildComponent1 and import the ThemeContext
// have div with lorem ipsum text and apply the style using the theme context
// if it is dark apply green background and white text color else apply white background and black text color

// Path: my-app/src/Components/ThemeContext/GreaterGrandChildComponent1.js

import React,{useContext} from "react";

import ThemeContext from "./ThemeContext";

function GreaterGrandChildComponent1(){

    const theme = useContext(ThemeContext);

    return(
        <div style={{backgroundColor:theme == 'dark'? 'green':'white', color:theme == 'dark'? 'white':'black'}}>
            <h1>GreaterGrandChild Component1</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
        </div>
    )
}

export default GreaterGrandChildComponent1;
    