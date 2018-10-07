import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../lib/auth-context';

export default class Navbar extends Component {

  render() {
    return (
      <AuthConsumer>
        { authStore => {
            const { isLogged, user, logout } = authStore;
            const { username } = user;
            if (isLogged) {
              return <div>
                <p>username: { username }</p>
                <p onClick={logout}>Logout</p>
              </div>
            } else {
              return <div>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
              </div>
            }
          }
        }
      </AuthConsumer>
    )
  }
}
