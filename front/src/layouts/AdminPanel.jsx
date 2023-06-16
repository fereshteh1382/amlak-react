import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import AdminTopNav from "../components/admin/AdminTopNav";

const AdminPanel = () =>{
    return(
        <>
            <AdminTopNav />
            <Outlet />
        </> 
    )
}

export default AdminPanel;