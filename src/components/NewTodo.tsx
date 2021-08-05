import React, { useRef } from 'react'
import { TodoAddType } from '../interface/todo.model'

const NewTodo: React.FC<TodoAddType> = props => {

    let inputValue = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        props.todoAdd(inputValue.current!.value)
        inputValue.current!.value = ''

    }

    return (
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <label>Todo Title</label>
                <input type="text" ref={inputValue} name="todo" />
            </div>
            <button> Submit </button>
        </form>
    )
}

export default NewTodo