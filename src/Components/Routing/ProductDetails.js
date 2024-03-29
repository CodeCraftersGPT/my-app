// define the product detail component with car1,model1,1000


import React from 'react';

import { useParams } from 'react-router-dom';

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

function ProductDetails() {

    const { name,model } = useParams();
    console.log(name);
    console.log(`model: ${model} `);

    // access the query parameter price passed in the url.

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const price = params.get('price');
    console.log(price);
    

    // find the product based on the name in the products array.

     const product = products.find(product => product.name === name);

    // Display the product details based on the name

    // in real time we will query our back end to get the product details based on the name and display it here'

    // we will refer the hard coded array and get the details and populate it


    return (
        <div>
            <h1>Product Details</h1>
           <h3>name: {product.name}</h3>
           <h3>model: {product.model}</h3>
           <h3>price: {product.price}</h3>
           
        </div>
    )
}

export default ProductDetails;
