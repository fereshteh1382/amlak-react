import {Navigate } from 'react-router-dom';
import { existUser } from '../../utils/TokenManagement';
  
const ProtectedRoute = ({ children }) => {
    
    const exist = existUser();
    if (!exist) {
        return <Navigate to="/agency/login" replace="true" />;
    }
  
    return children; 
};

export default ProtectedRoute;  