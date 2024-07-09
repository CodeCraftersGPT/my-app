// Define the Order component with simple Order message with props wrapped with the withLogger HOC

import React, { useEffect } from "react";
import withLogger from "./withLogger";
const Order = (props) => {
// define log functionality with useEffect hook on component mount and unmount
    return (
        <div>
        <h1>Order Component</h1>
        <p>{props.message}</p>
        </div>
    );
    }

export default withLogger(Order);


