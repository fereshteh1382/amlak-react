import {Navigate } from 'react-router-dom';
import { existAdmin } from '../../utils/TokenManagement';
  
const AdminProtectedRoute = ({ children }) => {
    
    const exist = existAdmin();
    if (!exist) {
        return <Navigate to="/adminpanel" replace="true" />;
    }
  
    return children; 
};

export default AdminProtectedRoute;  