import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, isLogged, ...rest }) => {
  // console.log({ component: Component, user, ...rest })
  return (
    <Route 
      {...rest}
      render={props => {
        if (isLogged) {
          return <Component {...props} isLogged={true} user={user} />
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      }
      }
    />
  )
}
export default PrivateRoute;