import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Basic React Authentication</h1>
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/private" component={Private} />
        </Switch>
      </div>
    )
  }
}

export default App;
