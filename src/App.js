import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './styles/style.scss'
import { getDay, getMonth, getDate, getYear } from './utils/FormatDate'
import Header from './components/Header'
import Note from './components/Note'
import { v1 as uuidv1 } from 'uuid';

//initializing store 


function App({ todoList, addTodo, deleteTodo, updateTodo }) {

  const [input, setInput] = useState("");
  const [tab, setTab] = useState("home");

  function addTodoHandler(event) {
    console.log(event.key)
    if (event.key == 'Enter') {

      if (input != "") {
        //ADDNOTE
        addTodo({
          status: false,
          id: uuidv1(),
          text: input
        });
        setInput("")
      } else {
        alert("empty field")
      }

    }
  }

  function inputChangeHandler(event) {
    setInput(event.target.value)
  }


  //delete note 
  function deleteNoteHandler(todoid) {
    deleteTodo(todoid)
  }
  function updateStatusHandler(todoid) {
    console.log("update todo")
    updateTodo(todoid)
  }

  function filterTodo() {

    return todoList.filter(element => {
      switch (tab) {
        case 'home':
          return element;
          break;
        case 'completed':
          if (element.status == true) {
            return element
          }
          break;
        case 'incompleted':
          if (element.status == false) {
            return element
          }
          break;
        default:
          return element
      }

    });
  }
  function switchTab(tabid) {
    setTab(tabid)
  }

  return (
    <div className="container">
      <div className="wrapper">
        <Header handler={switchTab} />
        <div className="date-section">
          <h1>{getDay()}</h1>
          <p> {getMonth() + " " + getDate() + ", " + getYear()}</p>
        </div>
        <div className="body">
          <input type="text" placeholder="Add a note (Enter)" onKeyDown={addTodoHandler} value={input} onChange={inputChangeHandler} />
          <div className="note-list">
            {filterTodo().map(element => <Note data={element} key={element.id} deleteHandler={deleteNoteHandler} updateHandler={updateStatusHandler} />)}
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;
