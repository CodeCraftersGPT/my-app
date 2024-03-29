// create ChildComponent1 import the GranChildCOmponent1 and use it
// diplay lorem ipsum text with Welcome to the ChildComponent1 text

// Path: my-app/src/Components/ThemeContext/ChildComponent1.js

import React from "react";

import GrandChildComponent1 from "./GrandChildComponent1";

function ChildComponent1(){

    return(
        <div>
            <h1>Welcome to the ChildComponent1</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
            <GrandChildComponent1/>
        </div>
    )
}

export default ChildComponent1;