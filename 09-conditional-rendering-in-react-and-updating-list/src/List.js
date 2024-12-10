import { useState } from "react";

const List = ()=>{
    
    const [ todos , setTodos ] = useState(['todo-1' , 'todo-2' , 'todo-3']);
    
    return (
        <>
        <h1>Modifying List(using array elements) :---</h1>

        <ul>
        {todos.map((todoElement , index)=> <li key={index}>{todoElement}</li>)}
        <button onClick={()=> setTodos([...todos, "another-one-todo"])}>Click me to add the List items</button>

        {/* jsx me humlog push method ka use nahi kar sakten hai. */}
        {/* <button onClick={()=> setTodos.push("another-one-todo")}>Click me to change List items</button> */}
        </ul>
        </>
    )
}

export default List;