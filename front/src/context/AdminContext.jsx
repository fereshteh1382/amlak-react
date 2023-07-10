import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
import { addAgencyUser } from "../redux-actions/agencyUser";
import { ActiveUserApi, DisActiveUserApi, getAllUsersFrontApi, RemainingSmsCountApi, TokenUserApi } from "../services/agencyUserAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { SetUserInfoByToken } from "../utils/TokenManagement";
// import { withRouter } from "react-router";
import { AdminStateContext } from "./AdminStateContext";


const AdminContext = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [allAgencyInfo, setAllAgencyInfo] = useState([]);
    
    useEffect(() => {
        const fetchInfo = async () => {
            try {
                getAllAgency();
            } catch (ex) {
                setAllAgencyInfo([]);
            }
        };
        fetchInfo();
        getAllUsersFrontApi();

    }, []);
    
    const getAllAgency = async () =>{
        const agenciesInfo = await getAllUsersFrontApi();
        if (agenciesInfo.data && agenciesInfo.data.allusers) {
            setAllAgencyInfo(agenciesInfo.data.allusers);
        }
        else {
            setAllAgencyInfo([]);
        }
    }

    const loginAsAgency = async mobile => {
        try {
                const { data, status } = await TokenUserApi(mobile);
                if (status === 200) {
                    let UserInfo = SetUserInfoByToken(data); 
                    const smsdata = await RemainingSmsCountApi({userid: data.userId});
                    if (smsdata.status === 200 && smsdata.data && smsdata.data.smscount ) {
                        UserInfo = {...UserInfo,remainingSms: smsdata.data.smscount}
                        dispatch(addAgencyUser(UserInfo));
                        navigate('/agency', { replace: true });
                    }
                    
                }
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در انجام عملیات رخ داده است.");
        }
    };

    const changeUserStatus = async (userid, userstatus) => {
        try {

                if(isEmpty(userid) && userstatus !== 'noactive' && userstatus !== 'active'){
                    errorMessage("خطا در وضعیت کاربر");
                    return;
                }

                const { data, status } = (userstatus == 'noactive') ? 
                    await ActiveUserApi(userid) : await DisActiveUserApi(userid);
                
                
                if (status == 200) {
                    console.log(status)    
                    successMessage("تغییر وضعیت کاربر با موفقیت انجام گردید.");
                    
                }
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در انجام عملیات رخ داده است.");
        }
    };

    
    return (
        <AdminStateContext.Provider
            value={{
                allAgencyInfo,
                loginAsAgency,
                changeUserStatus,
            }}
        >
            {children}
        </AdminStateContext.Provider>
    );
};

export default withRouter(AdminContext);