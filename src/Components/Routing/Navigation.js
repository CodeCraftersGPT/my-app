// Define a Navigation Component
// import the navlink component from react-router-dom
// define the navlinks to home,about and products

import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Counter">Cpunter</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </div>
    )
}

export default Navigation;