import { useState } from "react";
import Todo from "../Todo/Todo.jsx";

function TodoList({list}) {

    

    return (
        <div className="todo-list">
            {list.length > 0 ? (
                list.map((todo) => <Todo key={todo.id} todoData={todo.todoData} />)
            ) : (
                <p>No todos available</p>
            )}
        </div>
    );
}

export default TodoList;
