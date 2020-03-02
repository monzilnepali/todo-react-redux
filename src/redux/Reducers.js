

export const reducer = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TODO':
      state = [...state, action.todo];
      break;
    case 'DELETE_TODO':
      state = [...state.filter((todo) => todo.id !== action.todoid)];
      break;
    case 'UPDATE_TODO':
      state = [...state.map((todo) => {
        if (todo.id == action.todoid) {
          todo.status = !todo.status
        }
        return todo
      })];
      break;
    default:
      return state
  }
  return state;
}