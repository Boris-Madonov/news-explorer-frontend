import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';

const ProtectedRoute = ({ ...routeProps }) => {
  const loggedIn = useContext(LoggedInContext);

  return(
    <Route>
      {
        () => loggedIn ? <Route {...routeProps} /> : <Redirect to="/" />
      }
    </Route>
  )
};

export default ProtectedRoute