import React from 'react'
import { ToDoForm } from './ToDoForm'
import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import { ToDo } from './ToDo';
import { EditToDoForm } from './EditToDoForm';
import { OpenToDo } from './OpenToDo';
uuidv4();

export const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [filterIncompleted, setFilterIncompleted] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []; 
    setTodos(savedTodos);
  }, [])

  const addTodo = todo => {
    const newTodos = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false, checked: false}];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const deleteTodo = id =>{
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const deleteCheckedTodos = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEdited: !todo.isEdited} : todo));
  }

  const editTask = (task, id) => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, task, isEdited: !todo.isEdited} : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const openTodo = id =>{
      console.log(id);
  }

  const toggleComplete = id =>{
    const newTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed} : todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    console.log("clicked");
  }

  const filtered = filterIncompleted ? todos.filter(todo => !todo.completed) : todos;
  
  const exportData = () =>{
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify([todos])
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  return (
    <div className='todo-list'>
      <h1>Your To Do List</h1>
    <ToDoForm addTodo={addTodo} setFilter={setFilterIncompleted}/>
    <button type='button' className='export-btn' onClick={exportData}>Export Data</button>
    <button type='button' className='delete-btn' onClick={deleteCheckedTodos}>Bulk Delete</button>
    {filtered.map((todo, index) => (
    todo.isOpened ? (<OpenToDo openTodo={openTodo}/>) : (todo.isEdited ? 
    (<EditToDoForm editTodo={editTask} task={todo}/>) :
    (<ToDo task={todo} key={index} 
    deleteTodo={deleteTodo} editTodo={editTodo} openTodo={openTodo} toggleComplete={toggleComplete}/>))))}
    </div>
  )
}
