// create greet component with name as props and return h1 tag with Hello {name}

import React from 'react';

function Greet({name}) {
    return <h1>Hello {name}</h1>;
    }

export default Greet;