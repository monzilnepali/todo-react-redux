import React from 'react'
import Header from '../components/Header'
import { getDay, getMonth, getDate, getYear } from '../utils/FormatDate'
import Note from '../components/Note'
function Home() {
  return (
    <>
      <Header />
      <div className="date-section">
        <h1>{getDay()}</h1>
        <p> {getMonth() + " " + getDate() + ", " + getYear()}</p>
      </div>
      <div className="body">
        <input type="text" placeholder="Add a note (Enter)" />
        <div className="note-list">
          <Note value="note i" />
          <Note value="note i" />
          <Note value="note i" />
        </div>
      </div>
    </>
  )
}

export default Home
