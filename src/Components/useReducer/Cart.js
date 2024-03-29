// define the Cart Component
// import the AppContext and fetch the state and dispatch using the useContext
// from state extract the cart and map through the cart and display the items in the cart
// for each item display the name and the quantity
// cart item does not contain the name and price, so we need to fetch the name and price from the products when we are mapping through the cat
// display cart items in the table format
// have removecart button to remove the item from the cart. dispatch removecart

import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Cart = () => {
    const { state, dispatch } = useContext(AppContext);
    const { cart, products } = state;

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
        {cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
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