import './style.css';
function TodoItem(props) {
    
    return ( 
        // <div className='todo'> 
        <div className={`todo ${props.todo.isCompleted ? "complete" : ""}`}>
            {props.todo.text}
            <div><button onClick={props.completeTodo}>Complete</button></div>
        </div>
    );
}

export default TodoItem;