// define cart reducer function with the initial state and the action types

const cartState = {
    cart: [],
};

// define reducer for additemtocart and removeitemfromcart

const cartReducer = (state, action) => {
    switch (action.type) {
        case "AddItemToCart":
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

export { cartState, cartReducer };




