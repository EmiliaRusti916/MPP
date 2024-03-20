import React from 'react'
import { useState } from 'react'
export const ToDoForm = ({addTodo}) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Write task text here'
        value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
    )
}
