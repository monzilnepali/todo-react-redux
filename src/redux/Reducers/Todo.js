const initialization = {
  todoList: []
}
const Todo = (state = initialization, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      state = Object.assign({}, state, {
        todoList: [...state.todoList, action.todo]
      })
      break;
    case 'DELETE_TODO':
      state = Object.assign({}, state, {
        todoList: [...state.todoList.filter((todo) => todo.id !== action.todoid)]
      })
      break;
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
  return state;
}

export default Todo