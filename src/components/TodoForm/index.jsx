import { useState } from "react";   

function TodoForm(props) {  
    const [value, setValue]= useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        props.addTodo (value);
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit}>
        <input 
        value={value}
        type="text"
        placeholder="Add new task"
        onChange={(event) => setValue(event.target.value)}
        />
        </form>  );
    }
export default TodoForm;