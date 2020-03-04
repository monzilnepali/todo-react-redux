import { getAllNote, addNote, deleteNote, updateNoteStatus } from "../../services/note.services"

const apiMiddleware = store => next => action => {

  switch (action.type) {
    case 'FETCH_TODO_DATA':
      next(action);
      // continue propagating the action
      getAllNote().then(res => {
        //after getting data from server dispatch action to set data to store
        store.dispatch({
          type: 'SET_TODO_DATA',
          payload: { todoList: res.data }
        })
      })
      break;
    case 'ADD_TODO':
      console.log(action.payload)
      next(action)
      addNote(action.payload).then(res => {
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
    case 'UPDATE_TODO':
      next(action)
      updateNoteStatus(action.payload).then(res => {
        store.dispatch(
          {
            type: 'UPDATE_TODO_SUCCEEDED',
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