import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
export const ToDo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='todo'>
      <p>{task.task}</p>
      <div>
      <FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#f7f7f7",}} className='fa-open'/>
      <FontAwesomeIcon icon={faPenToSquare} style={{color: "#f7f7f7",}} className='fa-edit' onClick={() => editTodo(task.id)} />
      <FontAwesomeIcon icon={faTrash} style={{color: "#f7f7f7",}} className='fa-delete' onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}
