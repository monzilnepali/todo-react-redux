import React, { useState } from 'react'
import { v1 as uuidv1 } from 'uuid';
import { addTodo } from '../redux/Actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
function AddNote({ addTodo }) {
  const [input, setInput] = useState("");
  function addTodoHandler(event) {
    if (event.key == 'Enter') {
      if (input != "") {
        //ADDNOTE
        addTodo({
          title: input
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
  return (
    <input type="text" placeholder="Add a note (Enter)" onKeyDown={addTodoHandler} value={input} onChange={inputChangeHandler} />

  )
}

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch)
})

export default connect(null, mapDispatchToProps)(AddNote);