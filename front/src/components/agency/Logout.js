import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { clearAgencyUser } from "../../redux-actions/agencyUser";
import { ClearUserTokens } from "../../utils/TokenManagement";


const AgencyLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        ClearUserTokens();
        dispatch(clearAgencyUser());
        navigate('/agency', { replace: true });
    }, []);
    return null;
};

export default AgencyLogout;