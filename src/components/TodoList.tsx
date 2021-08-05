import React, { useEffect } from 'react'
import { TodoType } from '../interface/todo.model';


const TodoList: React.FC<TodoType> = props => {

    useEffect(()=>{
            
    },[props.item])

    return <ul>
        {props.item && props.item.map(item => (
            <li key={item.id}>
                <span>{item.text}</span>
                <button onClick={() => props.todoDel(item.id)} >del</button>
            </li>))}
    </ul>
}

export default TodoList;