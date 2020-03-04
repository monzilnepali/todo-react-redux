import { createAction, handleActions } from 'redux-actions'
import { getAllTodo, addTodoReq } from '../../services/note.services'

export const SET_ADD_TODO = 'SET_ADD_TODO'
export const SET_DELETE_TODO = 'SET_DELETE_TODO'
export const SET_UPDATE_TODO = 'SET_UPDATE_TODO'
export const SET_FETCH_TODO = 'SET_FETCH_TODO'

export const setFetchTodo = createAction(SET_FETCH_TODO)
export const setAddTodo = createAction(SET_ADD_TODO)
export const setDeleteTodo = createAction(SET_DELETE_TODO)
export const setUpdateTodo = createAction(SET_UPDATE_TODO)


const initialization = {
  todoList: [],
}

const todoReducer = handleActions({
  SET_FETCH_TODO: (state, action) => ({ ...state, todoList: action.payload }),
  SET_ADD_TODO: (state, action) => ({ ...state, todoList: [...state.todoList, action.payload] })
}, initialization)

export const fetchTodo = () => {
  console.log("fetch todo called")
  return (dispatch) => {
    getAllTodo().then(res => {
      console.log("server response")
      console.log(res.data)
      dispatch(setFetchTodo(res.data))
    })
  }
}

export const addTodo = (todo) => {
  return (dispatch) => {
    addTodoReq(todo).then(res => {
      console.log(res.data)
      dispatch(setAddTodo(res.data))
    })
  }
}


export default todoReducer