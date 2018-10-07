import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import auth from './lib/auth-service';
import { AuthProvider } from './lib/auth-context';
import './App.css';

class App extends Component {

  state = {
    isLogged: false,
    user: {},
    status: 'loading'
  }

  setUser = (user) => {
    this.setState({
      isLogged: true,
      user,
    })
  }

  logoutUser = () =>{
    auth.logout()
      .then(() => {
        this.setState({ 
          isLogged: false,
          user: {},
        });
      })
      .catch( error => console.log(error))
  }

  componentDidMount() {
    auth.me()
      .then((user) => {
        this.setState({
          isLogged: true,
          user,
          status: 'loaded'
        })
      })
      .catch((error) => {
        this.setState({ 
          isLogged: false,
          user: {},
          status: 'loaded'
        });
      })
  }

  render() {
    const { isLogged, user, status } = this.state;
    switch (status) {
      case 'loading':
        return <div>Loading</div>
      default:
        return (
          <AuthProvider value={{ isLogged, user, logout: this.logoutUser }}>
            <h1>Basic React Authentication</h1>
            <Navbar />
            <Switch>
              <AnonRoute path="/signup" component={Signup} setUser={this.setUser} isLogged={isLogged} />
              <AnonRoute path="/login" component={Login} setUser={this.setUser} isLogged={isLogged} />
              <PrivateRoute path="/private" component={Private} isLogged={isLogged} user={user} />
            </Switch>
          </AuthProvider>
        );
    }
  }
}

export default App;
