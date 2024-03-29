// define GrandChildComponent which takes the theme as a prop and apply the style accordingly to the div tag with lorem ipsum text t


// Path: my-app/src/Components/PropertyDrilling/GrandChildComponent.js

import React from "react";
import GreaterGrandChildren from "./GreaterGrandChildren";


function GrandChildComponent(props){
    return(
        <>
        <div style={{color:props.theme == 'dark'? 'red':'green'}}>
            <h1>GrandChild Component</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
        </div>
        <div>
            <GreaterGrandChildren theme={props.theme}/> 
        </div>
        </>
    )
}

export default GrandChildComponent;