# (A). To run the react app:
```bash
npm start
```
<hr>

<!-- (1). Conditional.js -->
## (1). (Conditional.js):
```jsx

import { useState } from "react";

const Conditional = ()=>{
    const[ x , setX ] = useState(0);
    return(
        <>
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

```
`<p><b>Count X: </b> {x} is { (x%2 === 0) ? "Even" : "Odd" }</p>` : Yanha par agar variable x ko 2 se devide karne par agar remainder `0` bachega to `Even` aur agar `1` bachega to `Odd` show karega.

<hr>

<!-- (2). List.js -->
## (2). (List.js):
```jsx

import { useState } from "react";

const List = ()=>{
    
    const [ todos , setTodos ] = useState(['todo-1' , 'todo-2' , 'todo-3']);
    
    return (
        <ul>
        {todos.map((todoElement , index)=> <li key={index}>{todoElement}</li>)}
        <button onClick={()=> setTodos([...todos, "another-one-todo"])}>Click me to change List items</button>
        

        {/* jsx me humlog push method ka use nahi kar sakten hai. */}
        {/* <button onClick={()=> setTodos.push("another-one-todo")}>Click me to change List items</button> */}

        </ul>
    )
}

export default List;

```
`jsx` ke andar me humlog list ke `.push()` method ka use nahi kar sakten hai , isiliye humlog `.map()` method ka use kar rahen hai.