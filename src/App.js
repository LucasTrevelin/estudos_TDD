import React, { useRef } from 'react'
import './App.css';

function App() {
const [count,setCount] = React.useState(0);
const [ilegal, setIlegal] = React.useState(true);
const refSpan = useRef();


function handleIncrement(){
  setIlegal(false)
  setCount(count + 1)
  refSpan.current.hidden = true;
}

function handleDecrement(){
  if(ilegal){
    refSpan.current.hidden = false;  
  }else if(count === 1){
    setIlegal(true)
    console.log(ilegal)
    setCount(count - 1)

  }else{
    setIlegal(false)
    console.log(ilegal)
    setCount(count -1)
  }
}
  return (
    <div className="App" data-test="component-app">
      <h1 data-test="counter-display">
        A contagem está em:{' '}
        <span data-test="count">{count}</span>
      </h1>
      <span  data-test="error-msg" hidden={true} ref={refSpan} style={{color:"red"}}><h1>O contador não pode ser menor que 0</h1></span>
      <button 
        data-test="increment-button"
        onClick={handleIncrement}>Conte-me mais!</button>
      {/* <Componente/> */}
      <button 
      data-test="decrement-button"
      onClick={handleDecrement}
      >Conte-me menos!</button>
    </div>
  );
}

export default App;
