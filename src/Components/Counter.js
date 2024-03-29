// i want to create variable called counter. display it in the uI. have a button to increment the counter.

import { useState,useEffect } from "react";

// import the akstyles.css file to current component

import "./akstyle.css";

// import the css module file to current component

import akStyles from "./Counter.module.css";





function Counter(){

    // define h1 style in js object and use it in the h1 tag

    const h1Style = {
        color:"red",
        backgroundColor:"yellow",
        fontSize:"40px",
        padding:"20px"
    }

    // define pi constant
    const PI = 3.14;// state.


    let [count,setCount] = useState(10);

    
// when the component is mounted for the first time, the useEffect will be called.
    useEffect(()=>{
        console.log("useEffect called");
        document.title = `Counter value is ${count}`;
    })


    function incrementCount(){
        setCount(count + 1);
    }
    return (
        <>
            <h1 style={h1Style}>pi value is {PI} </h1>
            <h1 className="akClass">counter value is {count} </h1>
            <h1 className={akStyles.akClass}>this is placeholder h1 tag to apply the styles via css module </h1>
            <button onClick={incrementCount}>Increment</button>
        </>
    )
}

export default Counter;