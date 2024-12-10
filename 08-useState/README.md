# (A). To run the react app:
```bash
npm start
```
<hr>

## (B). `const [x, setX] = useState(0);`:
- Yahan par humne `x` naam ka ek `useState` variable liya hai jisme initially `0` ko store kiya hai.
- `setX`  naam ka ek function hai jo hamare variable `x` ka state change karne me madad karega.


## (C). `counter.js` file :

```jsx

import { useState } from "react";

const styleSheet = { fontSize: "17px", border: "2px solid black", borderRadius: "20px", padding: "5px 25px", margin: "10px" };

const Counter = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <>
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

```


> # Importent Note :
> - `setX(x + 1)` : Ye variable `x` ke jo bhi value hoga usme `1` ko `add` kardega.
>- `setX(x - 1)` : Ye variable `x` ke jo bhi value hoga usme `1` ko `substract` kardega.