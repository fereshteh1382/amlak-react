import { createContext } from "react";

export const EstateStateContext = createContext({
    estatesInfo:[],
    condition:{},
    estate:{},
    YesNoOptions:[],
    setEstate: ()=>{},
    handleEstateInsert: ()=>{},
    statusOptions:()=>{},
    SetEsatetByID:()=>{},
});
