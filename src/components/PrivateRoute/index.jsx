import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated, login } from "../../Auth/auth";

function PrivateRoute() {
  {
    isAuthenticated ? (
      <Navigate replace to={"/home"} />
    ) : (
      <Navigate to="/login" />
    );
  }
}

export default PrivateRoute;

/* const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }
  try {
    const decodedToken = jwt.verify(token, 'my_secret_key');
    if (decodedToken.email) {
      return <Route path={path} element={element} />;
    }
  } catch (error) {
    return <Navigate to="/login" />;
  }
  return null; */
