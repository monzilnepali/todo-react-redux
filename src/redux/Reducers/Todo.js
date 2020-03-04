import { FETCH_TODO_DATA } from '../Actions'
const initialization = {
  todoList: [],
  error: ''
}
const Todo = (state = initialization, action) => {

  switch (action.type) {
    case FETCH_TODO_DATA:
      return {
        ...state,
        todoList: action.payload.todoList
      }
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload.todo]
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todoList: [...state.todoList.filter((todo) => todo._id !== action.payload.todoid)]
      }
    case 'UPDATE_TODO':
      return {
        ...state,
        todoList: [...state.todoList.map((todo) => {
          if (todo._id == action.payload.todoid) {
            todo.status = !todo.status
          }
          return todo
        })]
      }
    default:
      return state
  }

}

export default Todo