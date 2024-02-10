import { useState } from "react";
import './style.css';

function TodoForm(props) {  
    const [value, setValue]= useState("");
    const handleSubmit = (event) => { //our function to deal with the form submission events
        event.preventDefault(); //stop the normal bevahvior 
        if (!value) return;  //if the value is empty, return nothing
        props.addTodo (value); //if it exisit, add the value to the list
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit} className="">
        <input 
        value={value}
        type="text"
        placeholder="Add new task"
        onChange={(event) => setValue(event.target.value)}
        />
        </form>  );
    }
export default TodoForm;

let text='hello';
if (value){text='value'}
else {text='no value'}
return (text='value')