import React from 'react'
import { getDay, getMonth, getDate, getYear } from '../utils/FormatDate'
import Header from '../components/Header'
import AddNote from '../components/AddNote';
import TodoListContainer from '../screen/TodoListContainer';
import { useLocation } from 'react-router-dom';

export default function DashBoard() {
  console.log("dash baord called")
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <div className="date-section">
          <h1>{getDay()}</h1>
          <p> {getMonth() + " " + getDate() + ", " + getYear()}</p>
        </div>
        <div className="body">
          {useLocation().pathname == '/home' ? <AddNote /> : ""}

          <TodoListContainer />

        </div>
      </div>
    </div>
  )
}
