import { getRequest, postRequest, putRequest, deleteRequest } from '../config/axios.config'

export const addTodoReq = (note) => {
  return postRequest('/note/addnote', note);
}

export const getAllNote = () => {
  return getRequest('/note/getallnote');
}

export const deleteNoteReq = (noteId) => {
  return deleteRequest('/note/delete/' + noteId);
}

export const updateTodoStatusReq = (noteId) => {
  return putRequest('/note/updatestatus/' + noteId);
}