// Define the Cart Component with hard coded products and display the products in the cart

import React from 'react';



function Cart() {



    const products = [
        {
            name: 'Car 1',
            model: 'Model 1',
            price: 10000
        },
        {
            name: 'Car 2',
            model: 'Model 2',
            price: 20000
        },
        {
            name: 'Car 3',
            model: 'Model 3',
            price: 30000
        },
        {
            name: 'Car 4',
            model: 'Model 4',
            price: 40000
        },
        {
            name: 'Car 5',
            model: 'Model 5',
            price: 50000
        },
        {
            name: 'New Car 6',
            model: 'Model 6',
            price: 60000
        },
        {
            name: 'New Car 7',
            model: 'Model 7',
            price: 70000
        },
        {
            name: 'New Car 8',
            model: 'Model 8',
            price: 80000
        },
        {
            name: 'New Car 9',
            model: 'Model 9',
            price: 90000
        },
        {
            name: 'New Car 10',
            model: 'Model 10',
            price: 100000
        },
        {
            name: 'Old Car 1',
            model: 'Model 1',
            price: 10000
        },
        {
            name: 'Old Car 2',
            model: 'Model 2',
            price: 20000
        },
        {
            name: 'Old Car 3',
            model: 'Model 3',
            price: 30000
        },
        {
            name: 'Old Car 4',
            model: 'Model 4',
            price: 40000
        },
        {
            name: 'Old Car 5',
            model: 'Model 5',
            price: 50000
        }
    ]

    return (
        <div>
            <h1>Welcome to the Cart Page</h1>
            {products.map((product,index) => {
                return (
                    <div key={index}>
                        <h4>{product.name}</h4>
                        <h4>{product.model}</h4>
                        <h4>{product.price}</h4>
                    </div>

                    
                )
            }
            )}
        </div>
    )
}

export default Cart;




