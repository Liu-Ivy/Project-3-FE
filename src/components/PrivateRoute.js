import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../components/AuthProvider';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // console.log({ component: Component, user, ...rest })
  return (
    <AuthConsumer>
    { authStore => {
        return (
          <Route 
            {...rest}
            render={props => {
              if (authStore.isLogged) {
                return <Component {...props} user={authStore.user} />
              } else {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
              }
            }
            }
          />
        )
      }
    }
    </AuthConsumer>
  )
}
export default PrivateRoute;