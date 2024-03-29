// Define the Order component with simple Order message with props wrapped with the withLogger HOC

import React from "react";
import withLogger from "./withLogger";


const Order = (props) => {
    return (
        <div>
        <h1>Order Component</h1>
        <p>{props.message}</p>
        </div>
    );
    }

export default withLogger(Order);


