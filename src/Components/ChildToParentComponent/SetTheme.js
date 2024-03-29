// create SetTheme Component with a button to change the theme from light to dark and vice versa
// SetTheme will be a child a component of the DashBoar1 Component which gets the function to update the latest
// them to the DashBoard1 Component.


import React from "react";

function SetTheme(props){

       return(
        <div>
            <button onClick={props.updateTheme}>Change Theme</button>
        </div>
    )
}

export default SetTheme;