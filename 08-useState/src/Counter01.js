import { useState } from "react";

const styleSheet = { fontSize: "17px", border: "2px solid black", borderRadius: "20px", padding: "5px 25px", margin: "10px" };

const Counter01 = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <>
        <h1>Counter with useState : </h1>
        {/* changing  */}
            <div className="counter-1">
            <span> Value of X = <strong>{x}</strong> </span>
            <br></br>
            <button style={styleSheet} onClick={() => setX(x + 1)}> Inc. X </button>
            <button style={styleSheet} onClick={() => setX(x - 1)}> Dec. X </button>
            <button style={styleSheet} onClick={() => setX(0)}>Re-set X</button>
            </div>

            <div className="counter-2">
            <span> Value of Y = <strong>{y}</strong> </span>
            <br></br>
            <button style={styleSheet} onClick={() => setY(y + 1)}> Inc.Y </button>
            <button style={styleSheet} onClick={() => setY(y - 1)}> Dec.Y </button>
            <button style={styleSheet} onClick={() => setY(0)}>Re-set Y</button>
            </div>
        </>
    )
}


export default Counter01;