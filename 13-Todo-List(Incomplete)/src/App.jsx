// import './App.css';
import AddTodo from './Components/AddTodo/AddTodo.jsx';
import TodoList from './Components/TodoList/TodoList.jsx';

function App() {
  const [ list , setList ] = useState([ 
    { id: 1, todoData: "tod-1" , finished: false },
    { id: 2, todoData: "tod-2" , finished: false },
    { id: 3, todoData: "tod-3" , finished: false },
])

  return (
  <>
  {/* Todo! */}
  <AddTodo updateList={(todo) => setList( [ 
    ...list , {id:list.length+1, todoData: todo, finished: false }
    ])} />
  <TodoList list={list} />
  </>
  )
}

export default App
