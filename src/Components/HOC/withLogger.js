// define Higher Order Component  to log the props of the component in using the useEffect ComponentDidMount
// componentdidUpdate and componentWillUnmount

// define the HOC as functional component

import React, { useEffect } from "react";

// define the HOC as functional component

const withLogger = (WrappedComponent) => {

    return (props) => {
        useEffect(() => {
        console.log("Component is Mounted");
        return () => {
            console.log("Component is Unmounted");
        };
        }, []);
    
        useEffect(() => {
        console.log("Component is Updated");
        });
    
        return <WrappedComponent />;
    };
    }

export default withLogger;


