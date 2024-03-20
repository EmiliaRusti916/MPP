import React from 'react'
import { useState } from 'react'
export const EditToDoForm = ({editTodo, task}) => {
  const [todo, setTodo] = useState(task.task);
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(todo, task.id);
    setTodo('');
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Update task here'
        value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update</button>
    </form>
    )
}
