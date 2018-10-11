import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

const AnonRoute = ({ component: Component, isLogged, setUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!isLogged) {
          return <Component {...props} setUser={setUser} />
        } else {
          return <Redirect to={{ pathname: '/private', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default withAuth()(AnonRoute);