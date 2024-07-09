// define the store object with the productreducer and cartreducers

// import the productreducer and cartreducer

// import the AppContext and fetch the state and dispatch using the useContext

// define the store object with the productreducer and cartreducers

// import the productreducer and cartreducer

import { productReducer, productState } from "./productReducer";
import { cartReducer, cartState } from "./cartReducer";


const store = {
    product: {productReducer,productState},
    cart: {cartReducer,cartState},
};

export default store;



