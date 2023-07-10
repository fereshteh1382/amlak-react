import { createContext } from "react";

export const AdminStateContext = createContext({
    allAgencyInfo:{},
    smsCountModal:false,
    useridChargedSms:0, 
    loginAsAgency:()=>{},
    changeUserStatus:()=>{},
    chargedUserSms:()=>{},
    handleSmsCountModalShow:()=>{},
    handleSmsCountModalClose:()=>{},
});
