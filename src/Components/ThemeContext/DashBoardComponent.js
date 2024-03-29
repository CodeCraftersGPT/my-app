// create DashBoard Component displays lorem ipsum text with Welcome to the Dashboard text

// Path: my-app/src/Components/ThemeContext/DashBoardComponent.js

import React from "react";
import ChildComponent1 from "./ChildComponent1";
// import theme context


function DashBoardComponent(){

    // use the context

    return(
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
            </p>
            <ChildComponent1/>
        </div>
    )
}

export default DashBoardComponent;


