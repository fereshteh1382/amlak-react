import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';
  
const ProtectedRoute = ({ children }) => {
    const user = useSelector(state => state.agencyUser);
    console.log(user);
    const existUser = user && user.mobile && !isEmpty(user.mobile);

    if (!existUser) {
        return <Navigate to="/agency/login" replace="true" />;
    }
  
    return children;
};

export default ProtectedRoute;  