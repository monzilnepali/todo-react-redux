import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { useLocation } from 'react-router-dom';

function TodoListContainer({ todoList }) {
  const location = useLocation().pathname;
  function filterTodo() {
    return todoList.filter(element => {
      switch (location) {
        case '/home':
          return element;
        case '/completed':
          if (element.status == true) {
            return element
          }
          break;
        case '/incomplete':
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
  todoList: state.Todo.todoList,
})

export default connect(mapStateToProps, null)(TodoListContainer);