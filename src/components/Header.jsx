import React from 'react'

export default function Header({ handler }) {
  return (
    <div className="nav">
      <li className="nav__link nav__link--active" onClick={() => handler('home')}>Home</li>
      <li className="nav__link" onClick={() => handler('completed')}>Completed</li>
      <li className="nav__link" onClick={() => handler('incompleted')}>Remaining</li>
    </div>
  )
}
