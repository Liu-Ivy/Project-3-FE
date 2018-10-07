import React, { Component } from 'react'
import auth from '../lib/auth-service';

export const AuthContext = React.createContext(
  // authStore // default value
);

export const AuthConsumer = AuthContext.Consumer;
export default class AuthProvider extends Component {
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
    const { children } = this.props;
    switch (status) {
      case 'loading':
        return <div>Loading</div>
      default:
        return (
          <AuthContext.Provider value={{ isLogged, user, logout: this.logoutUser, setUser: this.setUser }}>
            {children}
          </AuthContext.Provider>    
        );
    }
  }
}
