export const loadTodo = () => {
  try {
    const serializedState = localStorage.getItem('todoList')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}
export const saveTodo = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('todoList', serializedState)
  } catch (error) {
    return undefined

  }
}