// define product reducer function with the initial state and the action types


const productState = {
    products: [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 200 },
        { id: 3, name: "Product 3", price: 300 },
    ],
};

// define reducer for addprodut and removeproduct

const productReducer = (state, action) => {
    switch (action.type) {
        case "AddProduct":
            return {
                ...state,
                products: [...state.products, action.product],
            };
        case "RemoveProduct":
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.id
                ),
            };
        default:
            return state;
    }
}

export { productState, productReducer };

