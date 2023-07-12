import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
import { addAgencyUser } from "../redux-actions/agencyUser";
import { ActiveUserApi, DisActiveUserApi, getAllUsersFrontApi,  TokenUserApi, ChargedUserSmsPanelApi } from "../services/agencyUserAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { SetUserInfoByToken } from "../utils/TokenManagement";
// import { withRouter } from "react-router";
import { AdminStateContext } from "./AdminStateContext";


const AdminContext = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [allAgencyInfo, setAllAgencyInfo] = useState([]);
    
    /** sms modal */
    const [useridChargedSms, setUseridChargedSms] = useState(0);
    const [smsCountModal, setSmsCountModalShow] = useState(false);
    const handleSmsCountModalClose = () => {
        setUseridChargedSms(0)
        setSmsCountModalShow(false);
    }
    const handleSmsCountModalShow = (id) => {
        setUseridChargedSms(id);
        setSmsCountModalShow(true);
    }

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
                    if (data.user && data.user.smscount ) {
                        UserInfo = {...UserInfo,remainingSms: data.user.smscount}
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
                    successMessage("تغییر وضعیت کاربر با موفقیت انجام گردید.");
                    
                }
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در انجام عملیات رخ داده است.");
        }
    };

    const chargedUserSms = async formdata => {
        try {

            console.log(formdata.smscount)
                if(isEmpty(useridChargedSms) && formdata.smscount && formdata.smscount*1 <1){
                    errorMessage("خطا در اطلاعات");
                    return;
                }
                const { data, status } = await ChargedUserSmsPanelApi(useridChargedSms, formdata.smscount);
                if (status == 200) {
                    getAllAgency();
                    successMessage("شارژ پنل پیامک با موفقیت انجام شد");
                    handleSmsCountModalClose();
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
                chargedUserSms,
                handleSmsCountModalShow,
                handleSmsCountModalClose,
                smsCountModal,
                useridChargedSms, 
            }}
        >
            {children}
        </AdminStateContext.Provider>
    );
};

export default withRouter(AdminContext);