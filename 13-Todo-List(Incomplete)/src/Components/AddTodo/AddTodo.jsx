import { useState } from "react";

function AddTodo() {

    const [ inputText , SetInputText ] = useState("");

    return(
        <div className="Add-todo">
            <input 
                type="text"
                value={inputText}
                placeholder="Add your Next todo..."
                onChange={e => SetInputText(e.target.value)}
            />
            <button onClick={()=> updateList(inputText) } >Add</button>
        </div>
    )
}

export default AddTodo;