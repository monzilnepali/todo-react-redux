import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import { deleteTodo, updateTodo } from '../redux/Actions'
import { connect } from 'react-redux'


function Todo({ data: todo, deleteTodo, updateTodo }) {

  const [status, setStatus] = useState(todo.status);
  function deleteNoteHandler() {
    deleteTodo(todo._id)
  }
  function updateStatusHandler() {
    updateTodo(todo._id)
    setStatus(!status)
  }

  return (
    <div className="note">
      <IconContext.Provider value={{ className: 'icon' }}>
        {status ? <MdCheckBox className="icon" onClick={updateStatusHandler} /> : <MdCheckBoxOutlineBlank onClick={updateStatusHandler} />}
      </IconContext.Provider>
      <p className={status ? "text text--line-through" : 'text'}>{todo.title}</p>
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