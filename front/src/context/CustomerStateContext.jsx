import { createContext } from "react";

export const CustomerStateContext = createContext({
    defaultVal:{},
    customerId: 0,
    customerInfo:{},
    allCustomers:[],
    condition: {},
    loadingFields: {},

    handleCustomerRegister: ()=>{},
    handleDeleteCustomer: ()=>{},
    setCustomerId: () =>{},
    setCustomerInfo: () =>{},

    DeleteModalShow: false,
    handleDeleteAccept: ()=>{},
    handleDeleteClose: ()=>{}, 
    handleDeleteShow: ()=>{},

    reserveModalShow: false,
    reserveContent: "list",
    isSearch:false,
    SearchCustomer: () =>{},
    handleReserveShow: ()=>{},
    handleReserveClose: ()=>{},
    setReserveContent: ()=>{},
    handleRezervDateForCustomers: ()=>{},

    SmsModalShow: false,
    handleSmsClose: ()=>{},
    handleSmsShow: ()=>{},
    handleSendSms: ()=>{},

    newCustomerModalShow: false,
    handleNewCustomerModalClose: ()=>{},
    handleNewCustomerModalShow: ()=>{},
});
