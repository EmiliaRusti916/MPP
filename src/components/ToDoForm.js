import React from 'react'
import { useState } from 'react'
export const ToDoForm = ({addTodo, setFilter}) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  }

  const handleFilter = e =>{
    setFilter(prevFilter => !prevFilter);
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Write task text here'
        value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add</button>
        <button type='button' className='filter-btn' onClick={handleFilter}>Filter</button>
    </form>
    )
}
