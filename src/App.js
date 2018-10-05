import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import auth from './lib/auth-service';
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
    const { username } = user;
    switch (status) {
      case 'loading':
        return <div>Loading</div>
      default:
        return (
          <div>
            <h1>Basic React Authentication</h1>
            { isLogged && 
              <div>
                <p>username: { username }</p>
                <p onClick={this.logoutUser}>Logout</p>
              </div>
            }
            <Router>
              <Switch>
                <Route path="/signup" render={() => <Signup setUser={this.setUser} /> } />
                <Route path="/login" render={() => <Login setUser={this.setUser} /> } />
                <PrivateRoute path="/private" component={Private} isLogged={isLogged} user={user} />
              </Switch>
            </Router>
          </div>
        );
    }
    
  }
}

export default App;
