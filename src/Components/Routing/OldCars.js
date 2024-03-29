// Define the OldCars component with the list of old cars from the oldCars array defined in the component

import React from 'react';

import {NavLink} from 'react-router-dom';

// display array of old cars with name ,model and price

const oldCars = [
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

function OldCars() {
    const [cars,setCars] = React.useState(oldCars);

    return (
        <div>
            <h1>Welcome to the Old Cars Page</h1>
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
        </div>
    )
}

export default OldCars;

