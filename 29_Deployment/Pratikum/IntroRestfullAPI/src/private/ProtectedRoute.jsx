import React from 'react'
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ isSignedIn, redirectPath = '/login', children}) => {
  console.log("protected",isSignedIn);
  if(isSignedIn === false) {
    return <Navigate to={redirectPath} replace />;
  }else {
    return children
  }
};

export default ProtectedRoute