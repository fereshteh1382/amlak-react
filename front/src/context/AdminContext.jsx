import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
import { getAllUsersFrontApi, TokenUserApi } from "../services/agencyUserAPIs";
import { errorMessage, successMessage } from "../utils/message";
// import { withRouter } from "react-router";
import { AdminStateContext } from "./AdminStateContext";


const AdminContext = ({ children }) => {
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
            
                const { status } = await TokenUserApi(mobile);
                if (status === 200) {
                    // successMessage("اطلاعات ملک با موفقیت ویرایش گردید.");
                    navigate('/agency/estates', { replace: true });
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
            }}
        >
            {children}
        </AdminStateContext.Provider>
    );
};

export default withRouter(AdminContext);