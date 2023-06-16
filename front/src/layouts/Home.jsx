import Nav from "../components/home/Nav";
import Estates from "../components/home/Estates";
import { Outlet, useLocation } from "react-router-dom"

import HomeContext from "../context/HomeContext";

const Home = () =>{
    const location = useLocation();
    const pathName = location.pathname;

    return(

        <HomeContext>
            <Nav />
            {
                (pathName === '/' || pathName === '/estate' || pathName === '/estate/') ? <Estates /> :   <Outlet />
            }
        </HomeContext>

    )
}

export default Home;