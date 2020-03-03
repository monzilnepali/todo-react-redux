import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import { deleteTodo, updateTodo } from '../redux/Actions'
import { connect } from 'react-redux'


function Todo({ data: todo, deleteTodo, updateTodo }) {

  const [status, setStatus] = useState(todo.status);
  function deleteNoteHandler() {

    deleteTodo(todo.id)
  }
  function updateStatusHandler() {
    updateTodo(todo.id)
    setStatus(!status)
  }

  return (
    <div className="note">
      <IconContext.Provider value={{ className: 'icon' }}>
        {todo.status ? <MdCheckBox className="icon" onClick={updateStatusHandler} /> : <MdCheckBoxOutlineBlank onClick={updateStatusHandler} />}
      </IconContext.Provider>
      <p className={todo.status ? "text text--line-through" : 'text'}>{todo.text}</p>
      <IconContext.Provider value={{ className: 'icon' }}>
        <MdDelete onClick={deleteNoteHandler} />
      </IconContext.Provider>

    </div >
  )
}
const mapDispatchToProps = dispatch => ({
  deleteTodo: todoid => dispatch(deleteTodo(todoid)),
  updateTodo: todoid => dispatch(updateTodo(todoid))
})


export default connect(null, mapDispatchToProps)(Todo);