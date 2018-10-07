import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthConsumer } from '../components/AuthProvider';

const PrivateRoute = ({ component: Component, setUser, isLogged, ...rest }) => {
  // console.log({ component: Component, user, ...rest })
  return (
    <AuthConsumer>
    { authStore => {
        return (
          <Route
            {...rest}
            render={props => {
              if (!authStore.isLogged) {
                return <Component {...props} setUser={authStore.setUser} />
              } else {
                return <Redirect to={{ pathname: '/private', state: { from: props.location } }} />
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