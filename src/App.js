import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './styles/style.scss'

import DashBoard from './screen/DashBoard';
//initializing store 

function App() {
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
export default App;
