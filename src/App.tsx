import React, { useState } from 'react';
import './sass/App.scss';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './interface/todo.model';

const App: React.FC = () => {

  const [todo, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string):any => {
    setTodos(prevState => [...prevState, {
      id: Math.floor((Math.random() * 100) + 1).toString(),
      text: text
    }
    ])
  }

  const todoDelHandler = (todoId:string) =>{
    console.log(todoId);
    setTodos( prevTodos => prevTodos.filter(todo => todoId !==todo.id) )
  }

  return (
    <div className="App">
      <h1> ToDO APP</h1>
      <NewTodo todoAdd={todoAddHandler} />
      <TodoList item={todo} todoDel={todoDelHandler} />
    </div>
  );
}

export default App;
