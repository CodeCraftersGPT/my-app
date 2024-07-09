// define the product list component
// import the Appcontext and fetch context using the useContet

// from state extract products 
// map through the products and display them in the table format
// for each product display the name, price and add to cart button

// import the AppContext and fetch the state and dispatch using the useContext

 import React,{  useReducer,useContext } from "react";

// import {initialState} from "./reducer";

// // import productstate and productreducer from the productreducer file

// import { productState,productReducer } from "./productReducer";

// // import cartstate and cartreducer from the cartreducer file

//  import { cartState, cartReducer } from "./cartReducer";


import { AppContext } from "./AppContext";


const ProductList = () => {

    const { productstate, cartdispatch } = useContext(AppContext);

    // const [productstate, productdispatch] = useReducer(productReducer, productState);

    // const [cartstate, cartdispatch] = useReducer(cartReducer, cartState);

    // const { products } = productstate;

    //const { state, dispatch } = useContext(AppContext);
    //const { products } = state;

    return (
        <div>
        <h1>Product List</h1>
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {productstate.map((product) => (
            <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
            <button onClick={() => cartdispatch({ type: "AddItemToCart", id: product.id })}>
            Add to Cart
            </button>
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
    );
}

export default ProductList;


