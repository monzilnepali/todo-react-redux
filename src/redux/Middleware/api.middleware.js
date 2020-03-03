import { getAllNote, addNote, deleteNote } from "../../services/note.services"
import AddNote from "../../components/AddNote";

const apiMiddleware = store => next => action => {

  switch (action.type) {
    case 'FETCH_TODO_DATA':
      console.log("fetch todo data called")
      next(action);
      // continue propagating the action
      getAllNote().then(res => {
        console.log("result");
        //after getting data from server dispatch action to set data to store
        store.dispatch({
          type: 'SET_TODO_DATA',
          payload: { todoList: res.data }
        })
      })
      break;
    case 'ADD_TODO':
      console.log("add todo")
      console.log(action.payload)
      next(action)
      addNote(action.payload).then(res => {
        console.log("note added")
        //dispatch new aciotn
        store.dispatch(
          {
            type: 'ADD_TODO_SUCCEEDED',
            payload: { todo: res.data }
          }
        )
      })
      break;
    case 'DELETE_TODO':
      next(action)
      deleteNote(action.payload).then(res => {
        store.dispatch(
          {
            type: 'DELETE_TODO_SUCCEEDED',
            payload: { todoid: action.payload }
          }
        )

      })
      break
    default:
      next(action)
  }
}

export default apiMiddleware