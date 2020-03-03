const initialization = {
  todoList: [],
  isLoading: false,
  error: ''

}
const Todo = (state = initialization, action) => {

  switch (action.type) {
    case 'FETCH_TODO_DATA':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_TODO_DATA':
      return {
        ...state,
        isLoading: false,
        todoList: action.payload.todoList,
        error: ''
      }
    case 'ADD_TODO':
      return {
        ...state,
        isLoading: true
      }
    case 'ADD_TODO_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList, action.payload.todo]
      }

    case 'DELETE_TODO':
      return {
        ...state,
        isLoading: true
      }
    case 'DELETE_TODO_SUCCEEDED':
      console.log("delete", action.payload.todoid)
      return {
        ...state,
        isLoading: false,
        todoList: [...state.todoList.filter((todo) => todo._id !== action.payload.todoid)]
      }

    case 'UPDATE_TODO':
      state = Object.assign({}, state, {
        todoList: [...state.todoList.map((todo) => {
          if (todo.id == action.todoid) {
            todo.status = !todo.status
          }
          return todo
        })]
      })
      break;
    default:
      return state
  }

}

export default Todo