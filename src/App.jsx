import { useState } from "react";
import TodoItem from "./components/TodoItem"
import TodoForm from "./components/TodoForm";


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

  return (
    <>
    <h1>My ReactJS To-do list </h1>
    {todo.map( (todo, index) => (
      <TodoItem key={index} text={todo} />
    )  )}
    <TodoForm addTodo={addTodo}/>
    </>
  );
}

export default App
