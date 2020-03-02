export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

export const deleteTodo = (todoid) => ({
  type: 'DELETE_TODO',
  todoid
})
export const updateTodo = (todoid) => ({
  type: 'UPDATE_TODO',
  todoid
});

//action are function that return type action to reducer
