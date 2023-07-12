import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { clearAgencyUser } from "../../redux-actions/agencyUser";
import { ClearAllUserTokens, existAdmin } from "../../utils/TokenManagement";


const AgencyLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        ClearAllUserTokens();
        dispatch(clearAgencyUser());
        const url = (existAdmin()) ? "/admin/agency" : "/"

        navigate(url, { replace: true });
    }, []);
    return null;
};

export default AgencyLogout;