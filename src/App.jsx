import TodoItem from "./components/TodoItem"
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState(
    ["do this first",
    "get fuel",
    "buy flowers",
    "water the plants",]);
  return (
    <>
    <h1>My ReactJS To-do list </h1>
    {todo.map( (todo, index) => (
      <TodoItem key={index} text={todo} />
    )  )}
    </>
  );
}

export default App
