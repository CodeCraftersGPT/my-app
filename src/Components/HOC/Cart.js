// define product component with titltes as products and display message passed it as props
import React from "react";
import withLogger from "./withLogger";
const Cart = (props) => {
 
    return (
        <div>
            <h1>Carts</h1>
            <p>{props.message}</p>
        </div>
    );
}

export default withLogger(Cart);