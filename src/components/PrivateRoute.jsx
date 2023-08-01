import { Navigate } from 'react-router-dom';
import { useUser } from '../utils/userContext';

 const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const { currentUser } = useUser();  
    return !currentUser ? <Navigate replace to={redirectTo}  /> : Component;
  };

  export default PrivateRoute;