import React from 'react'
import { IconContext } from "react-icons";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";

export default function Note(props) {
  return (
    <div className="note">

      <IconContext.Provider value={{ className: 'icon' }}>
        <MdCheckBoxOutlineBlank />
      </IconContext.Provider>

      <p className="text">{props.value}</p>

      <IconContext.Provider value={{ className: 'icon' }}>
        <MdDelete />
      </IconContext.Provider>

    </div >
  )
}
