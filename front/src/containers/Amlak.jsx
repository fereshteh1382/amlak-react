import { Route, Routes } from "react-router-dom";
import AdminPanel from "../layouts/AdminPanel";
import Home from "../layouts/Home";
import AgencyPanel from "../layouts/AgencyPanel";
import AgencyDashboard from "../components/agency/Dashboard";
import AgencyLogin from "../components/agency/Login";
import Register from "../components/agency/Register";
import ProtectedRoute from "../components/agency/ProtectedRoute";
import CustomerLayout from "../components/agency/customer/CustomerLayout";
import AgencyLogout from "../components/agency/Logout";

const Amlak = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/admin" element={<AdminPanel />}>
                </Route>
                <Route path="/agency" element={<AgencyPanel />}>
                    <Route index  element={<ProtectedRoute><AgencyDashboard /></ProtectedRoute>} />
                    <Route path="login"  element={<AgencyLogin />}/>
                    <Route path="logout"  element={<AgencyLogout />}/>
                    <Route path="register" element={<Register />} />

                    <Route path="customers"  element={<ProtectedRoute><CustomerLayout mode="show" /></ProtectedRoute>}/>
                    <Route path="customers/new"  element={<ProtectedRoute><CustomerLayout mode="new" /></ProtectedRoute>}/>
                    <Route path="customers/:customerid"  element={<ProtectedRoute><CustomerLayout mode="edit" /></ProtectedRoute>}/>
                </Route>
            </Routes>
        </>
    );
};

export default Amlak;
