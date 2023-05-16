import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';
import { getUserInfoByToken } from '../../utils/TokenManagement';
  
const ProtectedRoute = ({ children }) => {
    
    const user = getUserInfoByToken();
    const existUser = user && user.mobile && !isEmpty(user.mobile);

    if (!existUser) {
        return <Navigate to="/agency/login" replace="true" />;
    }
  
    return children;
};

export default ProtectedRoute;  