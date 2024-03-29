function ResetCounter(){
 let counter = useContext(CounterContext);

 // you are not getting the refefce copy of the counter
 function resetHandle(){
 counter = 0;// you are updating the localy of copy of your counter
  }
 return(
 <button onClick={resetHandle()}>Reset Counter</button>
  )
 }