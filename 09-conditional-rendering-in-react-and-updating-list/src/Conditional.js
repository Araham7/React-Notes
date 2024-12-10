import { useState } from "react";

const Conditional = ()=>{
    const[ x , setX ] = useState(0);
    return(
        <>
        <h1>Odd Even Detector :---</h1>

        {/* (1). Here if "x%2 === 0" it will render "Even" , else it will render "Odd" */}
        <p><b>Count X: </b> {x} is { (x%2 === 0) ? "Even" : "Odd" }</p>

        {/* Incriment Button */}
        <button onClick={()=>{setX(x+1)}} > Inc..x </button>

        {/* Decriment Button */}
        <button onClick={()=>{setX(x-1)}} > Dec..x </button>

        {/* Reset Button */}
        <button onClick={()=>{setX(0)}} > Reset </button>
        </>
    )
}

export default Conditional;