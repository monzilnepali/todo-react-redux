import React from 'react'
import { IconContext } from "react-icons";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";

function Todo({ data: todo, deleteTodoHandler, updateTodoHandler }) {
  return (
    <div className="note">
      <IconContext.Provider value={{ className: 'icon' }}>
        {todo.status ? <MdCheckBox className="icon" onClick={() => updateTodoHandler(todo._id)} /> : <MdCheckBoxOutlineBlank onClick={() => updateTodoHandler(todo._id)} />}
      </IconContext.Provider>
      <p className={todo.status ? "text text--line-through" : 'text'}>{todo.title}</p>
      <IconContext.Provider value={{ className: 'icon' }}>
        <MdDelete onClick={() => deleteTodoHandler(todo._id)} />
      </IconContext.Provider>

    </div >
  )
}



export default Todo;