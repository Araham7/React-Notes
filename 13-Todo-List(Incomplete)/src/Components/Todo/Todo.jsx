function Todo({todoData}) {
    return(
        <div className="todo-item" >
        <input type="checkbox" />
        {todoData}
        <button className="edit-btn" >Edit</button>
        <button className="delete-btn" >Delete</button>
        </div>
    )
}

export default Todo;


