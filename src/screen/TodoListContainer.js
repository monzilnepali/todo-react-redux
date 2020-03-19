import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { useLocation } from 'react-router-dom';
import { deleteTodo, updateTodo } from '../redux/Actions'

function TodoListContainer({ todoList, updateTodo, deleteTodo }) {
  const location = useLocation().pathname;
  console.log("note list");
  console.log(todoList)
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
        {filterTodo().map(element => <Todo data={element} key={element._id} deleteTodoHandler={deleteTodo} updateTodoHandler={updateTodo} />)}
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  todoList: state.todoList,
})
const mapDispatchToProps = dispatch => ({
  deleteTodo: todoid => dispatch(deleteTodo(todoid)),
  updateTodo: todoid => dispatch(updateTodo(todoid))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);