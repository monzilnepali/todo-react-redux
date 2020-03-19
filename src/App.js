import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './styles/style.scss'
import DashBoard from './screen/DashBoard';
import { fetchTodo } from './redux/Actions';
import { connect } from 'react-redux'
//initializing store 

function App({ fetchTodo }) {

  useEffect(() => {
    console.log("component did mount")
    fetchTodo()
    console.log("fetch do caled")

  }, [])

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path='/home' component={DashBoard} />
        <Route exact path='/completed' component={DashBoard} />
        <Route exact path='/incomplete' component={DashBoard} />
      </Switch>
    </Router>
  );

}

const mapDispatchToProps = dispatch => ({
  fetchTodo: () => dispatch(fetchTodo())
})
export default connect(null, mapDispatchToProps)(App);
