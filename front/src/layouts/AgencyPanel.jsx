import Body from "../components/agency/Body";
import AgencyFooter from "../components/agency/Footer";
import AgencyTopNav from "../components/agency/TopNav";
import {ToastContainer} from "react-toastify";

const AgencyPanel = () =>{

    return(
        <>
            <AgencyTopNav />
            <ToastContainer />
            <Body />
            <AgencyFooter />
        </>
    )
}

export default AgencyPanel;