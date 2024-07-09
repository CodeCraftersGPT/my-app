// define the Cart Component
// import the AppContext and fetch the state and dispatch using the useContext
// from state extract the cart and map through the cart and display the items in the cart
// for each item display the name and the quantity
// cart item does not contain the name and price, so we need to fetch the name and price from the products when we are mapping through the cat
// display cart items in the table format
// have removecart button to remove the item from the cart. dispatch removecart

import React, { useContext,useReducer } from "react";
import { AppContext } from "./AppContext";

// import reducer,{initialState} from "./reducer";

// import cartstate and cartreducer from the cartreducer file

// import { cartState, cartReducer } from "./cartReducer";


const Cart = () => {

    const { cartstate,productstate, cartdispatch } = useContext(AppContext);
   // const { cart, products } = cartstate;

    return (
        <div>
        <h1>Cart</h1>
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {cartstate.map((item) => {
            const product = productstate.find((product) => product.id === item.id);
            return (
                <tr key={item.id}>
                <td>{product.name}</td>
                <td>{item.quantity}</td>
                <td>
                <button onClick={() => dispatch({ type: "RemoveItemFromCart", id: item.id })}>
                Remove from Cart
                </button>
                </td>
                </tr>
            );
        })}
        </tbody>
        </table>
        </div>
    );
}

export default Cart;