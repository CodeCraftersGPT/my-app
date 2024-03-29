// define GrandChildComponent with theme as input and pass it on to greatergreatergrandchildern component

// Path: my-app/src/Components/PropertyDrilling/GreaterGrandChildren.js



import React from "react";

import GreaterGreaterGrandChildren from "./GreaterGreaterGrandChildren";



function GreaterGrandChildren(props){
    return(
        <div>
            <h1>GreaterGrandChildren Component</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>

            <GreaterGreaterGrandChildren theme={props.theme}/>
        </div>
    )
}

export default GreaterGrandChildren;