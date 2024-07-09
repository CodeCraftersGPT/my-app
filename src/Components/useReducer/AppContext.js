// define the appcontext and fetch the state and dispatch using the useContext
// import the store and use the useReducer hook to get the state and dispatch
// via AppProvider provide the state and dispatch to the children

import React, { createContext, useReducer } from 'react';

import store from './reducer';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    //const [state, dispatch] = useReducer(store.product, store.cart);
    const [productstate, productdispatch] = useReducer(store.product.productReducer,state.product.productState );
    const [cartstate, cartdispatch] = useReducer(store.cart.cartReducer,state.cart.cartState );

    return (
        <AppContext.Provider value={{ productstate, productdispatch,cartstate,cartdispatch }}>
        {children}
        </AppContext.Provider>
    );
}

export default AppProvider;


