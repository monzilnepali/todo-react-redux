export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const deleteTodo = (todoid) => ({
  type: 'DELETE_TODO',
  payload: todoid
})
export const updateTodo = (todoid) => ({
  type: 'UPDATE_TODO',
  payload: todoid
});

export const fetchTodo = () => ({
  type: 'FETCH_TODO_DATA'
})

//action are function that return type action to reducer
