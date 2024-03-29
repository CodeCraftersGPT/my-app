// Define the Products component with the list of products from the products array defined in the component

import React from 'react';
import {useNavigate,NavLink,Outlet} from 'react-router-dom';

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
    
]

function Products() {

    const [cars,setCars] = React.useState(products);

    const navigate = useNavigate();

    function navigateToOrders() {
        // Navigate to the Orders page
        navigate('/orders');
    }

    return (
        <div>
            <h1>Welcome to the Products Page</h1>
           {/* use map method and display the cars */}
            {cars.map((car,index) => {
                return (
                    <div key={index}>
                        {/* wrap the name in navlink */}
                        <h4><NavLink to={`/products/${car.name}/${car.model}?price=${car.price}`}>{car.name}</NavLink></h4>
                        {/* <h3>{car.name}</h3> */}
                        <h4>{car.model}</h4>
                    </div>

                )
            })}
            <div>
                {/* Navigate to New Cars */}
                <NavLink to="newcars">New Cars</NavLink>
                <NavLink to="oldcars">Old Cars</NavLink>

            </div>
            <div>
                {/* Navigate to Orders */}
                <button onClick={navigateToOrders}>Orders</button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Products;

