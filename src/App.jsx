import { useState } from "react";
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {
  const [todo, setTodo] = useState(
    ["do this first",
    "get fuel",
    "buy flowers",
    "water the plants",]);
    
  const addTodo = (text) => {
          const newTodo = [...todo, text];
          setTodo(newTodo);
    };

  return ( <div className="app">
                <h1 className="todo-list">My ReactJS To-do list </h1>
                {todo.map( (todo, index) => (<TodoItem key={index} text={todo} />  ))}
                <TodoForm addTodo={addTodo}/>
            </div>
            );
}

export default App
