import { createContext } from "react";

export const HomeStateContext = createContext({
    selectedEstateInfo:{},
    setSelectedEstateInfo: ()=>{},
    showSelectedEstate: ()=>{},
});
