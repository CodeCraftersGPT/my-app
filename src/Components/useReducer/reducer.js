// define the initial state of the App which contains the products and the cart

const initialState = {
    products: [
        { id: 1, name: "Laptop", price: 1000, stock: 10 },
        { id: 2, name: "Mobile", price: 500, stock: 15 },
        { id: 3, name: "Headset", price: 100, stock: 20 },
        { id: 4, name: "Mouse", price: 50, stock: 25 },
        { id: 5, name: "Keyboard", price: 150, stock: 30 },
    ],
    cart: [
        { id: 1,  quantity: 5 },
        { id: 2,  quantity: 6 },
        { id: 3, quantity: 4},
    ],
};

// define the reducer function for the products and the cart for adding to the cart, removing from the cart 

function reducer(state, action) {
    switch (action.type) {
        case "AddItemToCart":
            // if the item is already in the cart then increase the quantity
            // else add the item to the cart
            const itemInCart = state.cart.find((item) => item.id === action.id);
            if (itemInCart) {
                return {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return {
                ...state,
                cart: [...state.cart, { id: action.id, quantity: 1 }],
            };
         
        case "RemoveItemFromCart":
            // if the quantity is 1 then remove the item from the cart
            // else decrease the quantity
            const itemInCart1 = state.cart.find((item) => item.id === action.id);
            if (itemInCart1.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.id),
                };
            }
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

         
        default:
            return state;
    }
   
}

export default reducer;

export { initialState };