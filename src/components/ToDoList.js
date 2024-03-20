import React from 'react'
import { ToDoForm } from './ToDoForm'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { ToDo } from './ToDo';
import { EditToDoForm } from './EditToDoForm';
uuidv4();

export const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEdited: false}]);
    console.log(todos);
  }

  const deleteTodo = id =>{
      setTodos(todos.filter(todo => todo.id != id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEdited: !todo.isEdited} : todo));
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEdited: !todo.isEdited} : todo));
  }

  return (
    <div className='todo-list'>
      <h1>Your To Do List</h1>
    <ToDoForm addTodo={addTodo}/>
    {todos.map((todo, index) => (
    todo.isEdited ? 
    (<EditToDoForm editTodo={editTask} task={todo}/>) :
    (<ToDo task={todo} key={index} 
    deleteTodo={deleteTodo} editTodo={editTodo}/>)))}
    </div>
  )
}
