import React, { useState, createContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AuthContext = createContext();

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("token")

  return (isAuthenticated ? <Outlet /> : <Navigate to="/login" />);
};

export default PrivateRoute;