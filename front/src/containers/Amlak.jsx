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

import EstateLayout from "../components/agency/estate/EsatetLayout";
import GroupSms from "../components/agency/GroupSms";
import EstateInfo from "../components/home/EstateInfo";
import Main from "../components/admin/agency/Main";
import Dashboard from "../components/admin/Dashboard";

const Amlak = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route  path="/estate" element={<Home />}> 
                    <Route path="" element={<Home />} />
                    <Route path=":id" element={<EstateInfo />} />
                </Route>
                   
                <Route path="/admin" element={<AdminPanel />}>
                    <Route index  element={<Dashboard />} />
                    <Route path="agency"  element={<Main />}/>
                </Route>
                
                <Route path="/agency" element={<AgencyPanel />}>
                    <Route index  element={<ProtectedRoute><AgencyDashboard /></ProtectedRoute>} />
                    <Route path="login"  element={<AgencyLogin />}/>
                    <Route path="logout"  element={<AgencyLogout />}/>
                    <Route path="register" element={<Register />} />

                    <Route path="customers"  element={<ProtectedRoute><CustomerLayout mode="show" /></ProtectedRoute>}/>
                    <Route path="customers/new"  element={<ProtectedRoute><CustomerLayout mode="new" /></ProtectedRoute>}/>
                    <Route path="customers/:customerid"  element={<ProtectedRoute><CustomerLayout mode="edit" /></ProtectedRoute>}/>
                    
                    <Route path="estates"  element={<ProtectedRoute><EstateLayout mode="show" /></ProtectedRoute>}/>
                    <Route path="estates/new"  element={<ProtectedRoute><EstateLayout mode="new" /></ProtectedRoute>} />
                    <Route path="estates/:estateid"  element={<ProtectedRoute><EstateLayout mode="edit" /></ProtectedRoute>}/>
                    {/* 
                    <Route path="customers/:customerid"  element={<ProtectedRoute><CustomerLayout mode="edit" /></ProtectedRoute>}/> */}
                    
                    <Route path="groupSms"  element={<ProtectedRoute><GroupSms /></ProtectedRoute>}/>

                </Route>
            </Routes>
        </>
    );
};

export default Amlak;
