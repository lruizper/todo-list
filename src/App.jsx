import { useState } from "react";
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/TodoForm";
import './App.css';

function App() {
  const [todo, setTodo] = useState([
    {text: "do this first", isCompleted: false},
    {text: "get fuel", isCompleted: false},
    {text:"buy flowers", isCompleted: false},
    {text:"water the plants", isCompleted: true},]);
    
  const addTodo = (text) => {
          const newTodo = [...todo, {text}];
          setTodo(newTodo);
  };
  const completeTodo = (index) => {
      const newTodo = [...todo];
      newTodo[index].isCompleted = true;
      setTodo(newTodo);
  };
  const removeTodo = (index) => {
      const newTodo = [...todo];
      newTodo.splice(index, 1);
      setTodo(newTodo);
  };

  return ( <div className="app">
                <h1 className="todo-list">My ReactJS To-do list </h1>
                {todo.map( (todo, index) => 
                (<TodoItem 
                key={index} 
                todo={todo} 
                completeTodo={() => completeTodo(index)}
                removeTodo={() => removeTodo(index)}
                />))}
                <TodoForm addTodo={addTodo}/>
            </div>
            );
}

export default App;
