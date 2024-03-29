// create GrandChildComponent1 and import the GreaterGrandChildComponent1 and use it

// Path: my-app/src/Components/ThemeContext/GrandChildComponent1.js

import React,{useContext} from "react";

import GreaterGrandChildComponent1 from "./GreaterGrandChildComponent1";
import UserContext from "./UserContext";



function GrandChildComponent1(){

    const user = useContext(UserContext);

    return(
        <div>
            <h1>Welcome to the GrandChildComponent1 to user : {user}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
            <GreaterGrandChildComponent1/>
        </div>
    )
}

export default GrandChildComponent1;
