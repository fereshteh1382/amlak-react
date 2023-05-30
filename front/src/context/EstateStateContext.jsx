import { createContext } from "react";

export const EstateStateContext = createContext({
    estatesInfo:[],
    condition:{},
    allCustomers:[],
    estate:{},
    YesNoOptions:[],
    setEstate: ()=>{},
    handleEstateInsert: ()=>{},
    statusOptions:()=>{},
    SetEsatetByID:()=>{}

});
