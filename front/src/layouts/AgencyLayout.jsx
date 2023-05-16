import { Outlet } from "react-router-dom"
import AgencyFooter from "../components/agency/AgencyFooter"
import AgencySidebar from "../components/agency/AgencySidebar"
import AgencyTopNav from "../components/agency/AgencyTopNav"
import Body from "../components/agency/Body"

const AgencyLayout = () =>{
    return (
        <>
            <AgencyTopNav />
            <Body />
            <AgencyFooter />
        </>
    )
}

export default AgencyLayout;