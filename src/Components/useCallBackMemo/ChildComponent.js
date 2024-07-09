import React from 'react';

// const ChildComponent = ({ onIncrement,count }) => {
//   console.log('Child Component Rendered');
//   return (
//     <>
//     <h1>Child Component {count}</h1>
//     <button onClick={onIncrement}>Increment</button>
//     </>
//   );
// };

const ChildComponent =React.memo( ( { onIncrement,count }) => {
  console.log('Child Component Rendered');
  return (
    <>
    <h1>Child Component {count}</h1>
    <button onClick={onIncrement}>Increment</button>
    </>
  );
});


export default ChildComponent;
