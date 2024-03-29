import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [salary,setSalary] = useState(10);
  //`increment` function is memoized with useCallback
  const increment = useCallback(() => {
    // in this case you are not refering the any function event argument any other state variables. then you can memoize
    setCount((c) => c + 1);
  }, []);
  // `increment` function is not memoized with useCallback
//   const increment = () => {
//     setCount((c) => c + 1);   // this is going to create a new function every time the component renders and new function reference is passed to the child component
//   }
  return (  //x ,x 
    <div>
      <ChildComponent onIncrement={increment}  count={count}/>
      <p>Count: {count}</p>
        <p>Salary: {salary}</p>
        <button onClick={()=>setSalary((s) => s + 1)}>update salary</button>
    </div>
  );
}
export default ParentComponent;
