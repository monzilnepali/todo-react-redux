import { createStore } from "redux";
import { Todo as TodoReducer } from './Reducers/Todo'
import { loadTodo, saveTodo } from "../utils/LocalStorage";

//getting data from localstorage and initialize store with that data
const initialState = loadTodo()
console.log("inital state", initialState)
const store = createStore(TodoReducer, initialState)

//to update the localstorage everytime there is change in store
//we basically using subscribe to store to update localstorage when store is change
console.log(store.getState())
store.subscribe(() => {
  saveTodo({
    todoList: store.getState().todoList
  }
  )
})

export default store;
