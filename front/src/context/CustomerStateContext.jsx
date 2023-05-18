import { createContext } from "react";

export const CustomerStateContext = createContext({
    customerId: 0,
    customerInfo:{},
    condition: {},
    loadingFields: {},
    handleCustomerRegister: ()=>{},
    setCustomerId: () =>{}
    
});
