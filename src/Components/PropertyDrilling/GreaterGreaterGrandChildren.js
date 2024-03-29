// define GreaterGreaterGrandChildren component with the theme as input and display the theme in the UI if it is dark apply red color to the 
// lorem ipsum text else apply green color


// Path: my-app/src/Components/PropertyDrilling/GreaterGreaterGrandChildren.js

import React from "react";

function GreaterGreaterGrandChildren(props){
    return(
        <div style={{color:props.theme == 'dark'? 'red':'green'}}>
            <h1>GreaterGreaterGrandChildren Component</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
        </div>
    )
}

export default GreaterGreaterGrandChildren;