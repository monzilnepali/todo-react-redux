import { getRequest, postRequest, putRequest, deleteRequest } from '../config/axios.config'

export const addNote = (note) => {
  return postRequest('/note/addnote', note);
}

export const getAllNote = () => {
  return getRequest('/note/getallnote');
}

export const deleteNote = (noteId) => {
  return deleteRequest('/note/delete/' + noteId);
}

export const updateNoteStatus = (noteId) => {
  return putRequest('/note/updatestatus/' + noteId);
}