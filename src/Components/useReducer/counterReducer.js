// define the counter reducer function with the initial state and the action types
// action types are increment, decrement, reset
// the reducer function takes the state and the action and returns the new state based on the action type

// define the initial state of the counter

const initialState = { count: 0 }; //initial state of the counter

// reducer function to handle the actions possible on the state
const counterReducer = (state, action) => {
    switch (action.type) {
        case "increment":
        return { count: state.count + 1 };
        case "decrement":
        return { count: state.count - 1 };
        case "reset":
        return { count: 0 };
        default:
        return state;
    }
    }
    export default counterReducer;

    export { initialState };    
