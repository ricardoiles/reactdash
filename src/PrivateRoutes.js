import React from 'react';
import {Route,Navigate} from "react-router-dom";
import {isauth}  from 'auth'

function PrivateRoute({ element, path }) {
  const authed = isauth() // isauth() returns true or false based on localStorage
  const ele = authed === true ? element : <Navigate to="/Home"  />;
  return <Route path={path} element={ele} />;
}

export default PrivateRoute