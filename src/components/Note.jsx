import React from 'react'
import { IconContext } from "react-icons";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";

export default function Note(props) {
  const todo = props.data;
  const deleteHandler = props.deleteHandler
  const updateStatusHandler = props.updateHandler
  return (
    <div className="note">
      <IconContext.Provider value={{ className: 'icon' }}>
        {todo.status ? <MdCheckBox onClick={() => updateStatusHandler(todo.id)} /> : <MdCheckBoxOutlineBlank onClick={() => updateStatusHandler(todo.id)} />}
      </IconContext.Provider>

      <p className={todo.status ? "text text--line-through" : 'text'}>{todo.text}</p>

      <IconContext.Provider value={{ className: 'icon' }}>
        <MdDelete onClick={() => deleteHandler(todo.id)} />
      </IconContext.Provider>

    </div >
  )
}
