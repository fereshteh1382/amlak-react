import { Route, Routes } from "react-router-dom";
import AdminPanel from "../layouts/AdminPanel";
import Home from "../layouts/Home";
import AgencyPanel from "../layouts/AgencyPanel";
import AgencyDashboard from "../components/agency/Dashboard";
import AgencyLogin from "../components/agency/Login";
import Register from "../components/agency/Register";
import ProtectedRoute from "../components/agency/ProtectedRoute";

const Amlak = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    {/* <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} /> */}
                </Route>
                <Route path="/admin" element={<AdminPanel />}>
                    {/* <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} /> */}
                </Route>
                <Route path="/agency" element={<AgencyPanel />}>
                    <Route index element={<ProtectedRoute><AgencyDashboard /></ProtectedRoute>} />
                    <Route path="login"  element={<AgencyLogin />}/>
                    <Route path="register" element={<Register />} />
                    <Route path="customer"  element={<ProtectedRoute><AgencyLogin /></ProtectedRoute>}/>
                    {/* <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
        </>
    );
};

export default Amlak;
