import React from 'react'

export default function Header() {
  return (
    <div className="nav">
      <li className="nav__link nav__link--active">Home</li>
      <li className="nav__link">Completed</li>
      <li className="nav__link">Remaining</li>
    </div>
  )
}
