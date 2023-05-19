import { createContext } from "react";

export const CustomerStateContext = createContext({
    defaultVal:{},
    customerId: 0,
    customerInfo:{},
    condition: {},
    loadingFields: {},
    handleCustomerRegister: ()=>{},
    handleDeleteCustomer: ()=>{},
    setCustomerId: () =>{},
    setCustomerInfo: () =>{},
    
});
