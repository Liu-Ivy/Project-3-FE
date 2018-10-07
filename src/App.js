import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthProvider from './components/AuthProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <h1>Basic React Authentication</h1>
        <Navbar />
        <Switch>
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
        </Switch>
      </AuthProvider>
    )
  }
}

export default App;
