import "./App.css";
import Counter from "./Counter";
import useCounter from "./Redux/hooks/useCounter"; // Importing reduxToolkit-hook.

function App() {

  const {incrementCount, decrementCount} = useCounter();
  
  return ( 
  <>
  {/* Increment Button */}
  <button
  onClick={()=> incrementCount()}
  >
    Increment
  </button>

  {/* Counter */}
  <Counter/>

  {/* Decerement Button */}
  <button
  onClick={() => decrementCount()}
  >
    Decerement
  </button>
  </> 
);
}

export default App;
