import { createContext } from "react";

export const AdminStateContext = createContext({
    allAgencyInfo:{},
    loginAsAgency:()=>{},
    changeUserStatus:{}
});
