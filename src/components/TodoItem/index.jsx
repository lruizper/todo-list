import './style.css';
function TodoItem(props) {
    
    return ( 
        <div className='todo'> {props.text}</div>
    )
}

export default TodoItem;