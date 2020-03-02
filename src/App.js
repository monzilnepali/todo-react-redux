import React from 'react';
import redux, { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './styles/style.scss'
import Home from './screen/Home';
function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/completed" component={Home} />
            <Route exact path="/remaining" component={Home} />
          </Switch>


        </Router>
      </div>
    </div>
  );
}

export default App;
