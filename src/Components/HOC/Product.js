// define product component with titltes as products and display message passed it as props

import React from "react";

import withLogger from "./withLogger";

const Product = (props) => {
    return (
        <div>
            <h1>Products</h1>
            <p>{props.message}</p>
        </div>
    );
}

export default withLogger(Product);