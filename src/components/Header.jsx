import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  return (
    <div className="nav">

      <NavLink className="nav__link" to="/home" activeClassName="nav__link--active">Home</NavLink>
      <NavLink className="nav__link" to="/completed" activeClassName="nav__link--active">Completed</NavLink>
      <NavLink className="nav__link" to="/incomplete" activeClassName="nav__link--active">Remaining</NavLink>
    </div>
  )
}


export default Header