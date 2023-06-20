import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import AdminTopNav from "../components/admin/AdminTopNav";
import AdminContext from "../context/AdminContext";

const AdminPanel = () =>{
    return(
        <AdminContext>
            <AdminTopNav />
            <Outlet />
        </AdminContext>
    )
}

export default AdminPanel;