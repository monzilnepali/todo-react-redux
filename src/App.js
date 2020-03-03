import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './styles/style.scss'
import { getDay, getMonth, getDate, getYear } from './utils/FormatDate'
import Header from './components/Header'
import AddNote from './components/AddNote';
import { addTodo, deleteTodo, updateTodo } from './redux/Actions'
import { connect } from 'react-redux'
import TodoListContainer from './screen/TodoListContainer';
//initializing store 


function App({ addTodo, deleteTodo, updateTodo }) {
  const [tab, setTab] = useState("home");
  //delete note 
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
          <AddNote />
          <div className="note-list">
            <TodoListContainer />
          </div>
        </div>
      </div>
    </div>
  );
}


// const mapStateToProps = state => ({
//   // todoList: state
// })
// const mapDispatchToProps = dispatch => ({
//   addTodo: todo => dispatch(addTodo(todo)),
//   deleteTodo: todoid => dispatch(deleteTodo(todoid)),
//   updateTodo: todoid => dispatch(updateTodo(todoid))
// })


export default App;
