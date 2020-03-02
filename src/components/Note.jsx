import React from 'react'
import { IconContext } from "react-icons";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import { deleteTodo, updateTodo } from '../redux/Actions'
import { connect } from 'react-redux'
function Note({ data: todo, deleteTodo, updateTodo }) {
  function deleteNoteHandler() {
    console.log("data")
    console.log("id" + todo.id)
    deleteTodo(todo.id)
  }
  function updateStatusHandler() {
    console.log("update todo" + todo.id)
    updateTodo(todo.id)
  }

  return (
    <div className="note">
      <IconContext.Provider value={{ className: 'icon' }}>
        {todo.status ? <MdCheckBox onClick={updateStatusHandler} /> : <MdCheckBoxOutlineBlank onClick={updateStatusHandler} />}
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


export default connect(null, mapDispatchToProps)(Note);