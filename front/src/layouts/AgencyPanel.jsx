import Body from "../components/agency/Body";
import AgencyFooter from "../components/agency/Footer";
import AgencyTopNav from "../components/agency/TopNav";
import {ToastContainer} from "react-toastify";
import AgencyBottomNav from "../components/agency/BottomNav";
import { useEffect } from "react";

const AgencyPanel = () =>{
    
    const resolution = window.innerWidth;  
    const isMobile = resolution >= 320 && resolution <= 480;  
    const isTablet = resolution >= 768 && resolution <= 1024; 
    const isDesktop = !isMobile && !isTablet;  // update state


    return(
        <>
            <AgencyTopNav />
            <ToastContainer />
            <Body typeView={isMobile || isTablet ? "mobile" : "desktop"} />
            {isMobile || isTablet ? <AgencyBottomNav /> : <AgencyFooter />}
            
        </>
    )
}

export default AgencyPanel;