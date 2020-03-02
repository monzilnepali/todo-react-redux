import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './redux/Reducers'
import { addTodo, deleteTodo, updateTodo } from './redux/Actions'


const store = createStore(reducer)
const mapStateToProps = state => ({
  todoList: state
})
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  deleteTodo: todoid => dispatch(deleteTodo(todoid)),
  updateTodo: todoid => dispatch(updateTodo(todoid))
})
const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>
  ,
  document.getElementById('root'));

