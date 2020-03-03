import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
function TodoListContainer({ todoList }) {

  function filterTodo() {
    return todoList.filter(element => {
      switch ("home") {
        case 'home':
          return element;
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
  return (
    <div>
      <div className="note-list">
        {filterTodo().map(element => <Todo data={element} key={element.id} />)}
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  todoList: state.todoList,
})

export default connect(mapStateToProps, null)(TodoListContainer);