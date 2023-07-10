import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminTopNav from "../components/admin/AdminTopNav";
import AdminContext from "../context/AdminContext";
import { existAdmin } from "../utils/TokenManagement";

const AdminPanel = () =>{
    const exist = existAdmin();
    if (!exist) {
        return <Navigate to="/adminpanel" replace="true" />;
    }
    return(
        <AdminContext>
            <ToastContainer />
            <AdminTopNav />
            <Outlet />
        </AdminContext>
    )
}

export default AdminPanel;