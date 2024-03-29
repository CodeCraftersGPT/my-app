// Define the NewCars component with the list of new cars from the newCars array defined in the component

import React from 'react';

import {NavLink} from 'react-router-dom';

// display array of new cars with name ,model and price

const newCars = [
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
    }
]


function NewCars() {
    const [cars,setCars] = React.useState(newCars);

    return (
        <div>
            <h1>Welcome to the New Cars Page</h1>
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

export default NewCars;
