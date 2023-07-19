import { createContext } from "react";

export const EstateStateContext = createContext({
    estatesInfo:[],
    condition:{},
    estate:{},
    YesNoOptions:[],
    RoomsOptions:[], 
    YearOptions:[], 
    FloorOptions:[],
    mainFile:{},
    image2File:{},
    image3File:{},
    setEstate: ()=>{},
    handleEstateInsert: ()=>{},
    statusOptions:()=>{},
    SetEsatetByID:()=>{},
    changeEstateStatus: ()=>{},
    handleMainfileChange: ()=>{},
    handleImage2fileChange: ()=>{},
    handleImage3fileChange: ()=>{},
});
