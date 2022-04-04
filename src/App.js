import './App.css';
import {useState} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList'
 
function App() {
  const [todos, setTodos] = useState([])

function addTodo(newTodo){
    console.log(todos)
    setTodos([...todos, newTodo])
 }

function handleTodo(todoItem){
    const itensFiltrado = todos.filter((item)=> item !== todoItem)
    setTodos(itensFiltrado)
} 

  return (
    <div className="App">
      <header className="App-header">
          <div className='todo'>
              <Form addTodo={addTodo}/>
              <TodoList todos={todos} handleTodo={handleTodo}/>
          </div>
      </header>
    </div>
  );
}

export default App;
