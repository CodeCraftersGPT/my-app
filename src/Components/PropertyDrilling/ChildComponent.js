// Define ChildComponent which gets the theme as a prop and pass it on to its child component


// Path: my-app/src/Components/PropertyDrilling/ChildComponent.js

import React from "react";
import GrandChildComponent from "./GrandChildComponent";

function ChildComponent(props){

    // props are immutable
    // you are chaning tlocal copy that does not impact on the parent
    return(
        <div>
            <h1>Child Component</h1>
            <GrandChildComponent theme={props.theme}/>
        </div>
    )
}

export default ChildComponent;
