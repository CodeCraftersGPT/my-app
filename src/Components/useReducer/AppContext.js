// define the AppContext using the CreateContext in reactjs
// import the reducer fucntion defined for the cart
// extract the store and dispath using the useReducer
// define AppProvider and pass thee state and dispatch to the value of the context


import React, { createContext, useReducer } from "react";
import reducer,{initialState} from "./reducer";

export const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
        {children}
        </AppContext.Provider>
    );
    }
export default AppProvider;
