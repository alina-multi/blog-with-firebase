import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? <Navigate replace to={redirectTo} /> : Component;
};

export default PrivateRoute;
