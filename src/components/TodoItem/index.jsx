import { useState } from "react";
function TodoItem(props) {
    const [todo, setTodo] = useState(
        ["do this first",
        "petrol station",
        "buy flowers"]);
    return ( 
        <div> {props.text}</div>
    )
}

export default TodoItem;