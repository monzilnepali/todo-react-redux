import { getAllNote, addTodoReq, updateTodoStatusReq } from '../services/note.services'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const FETCH_TODO_DATA = 'FETCH_TODO_DATA'

// export const addTodo = (todo) => ({
//   type: 'ADD_TODO',
//   payload: todo
// });
//SO instead of  returning js object using thunk middleware we can return function 

export const fetchTodo = () => {
  return (dispatch) => {
    //making sync call
    getAllNote().then(res => {
      console.log("res")
      console.log(res.data)
      //after getting data from server dispatch action to set data to store
      dispatch({
        type: 'FETCH_TODO_DATA',
        payload: { todoList: res.data }
      })
    })

  }
}
export const addTodo = (todo) => {
  return (dispatch) => {
    addTodoReq(todo).then(res => {
      dispatch({
        type: ADD_TODO,
        payload: { todo: res.data }
      })
    })
  }
}

export const updateTodo = (todoid) => {
  return (dispatch) => {
    updateTodoStatusReq(todoid).then(res => {
      dispatch({
        type: UPDATE_TODO,
        payload: { todoid }
      })
    })
  }
}

export const deleteTodo = (todoid) => {
  return (dispatch) => {
    updateTodoStatusReq(todoid).then(res => {
      dispatch({
        type: DELETE_TODO,
        payload: { todoid }
      })
    })
  }
}




//action are function that return type action to reducer
