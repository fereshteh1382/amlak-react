import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { clearAgencyUser } from "../../redux-actions/agencyUser";
import { ClearAdminTokens } from "../../utils/TokenManagement";


const AdminLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        ClearAdminTokens();
        dispatch(clearAgencyUser());
        navigate('/admin', { replace: true });
    }, []);
    return null;
};

export default AdminLogout;