import todoReducer from './Todo'
import { combineReducers } from 'redux'

const combineReducer = combineReducers({ todoReducer })
export default combineReducer