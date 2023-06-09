import { createContext } from "react";

export const EstateStateContext = createContext({
    estatesInfo:[],
    condition:{},
    estate:{},
    YesNoOptions:[],
    RoomsOptions:[], 
    YearOptions:[], 
    FloorOptions:[],
    setEstate: ()=>{},
    handleEstateInsert: ()=>{},
    statusOptions:()=>{},
    SetEsatetByID:()=>{},
});
