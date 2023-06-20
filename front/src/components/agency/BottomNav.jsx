import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

const AgencyBottomNav = () =>{
    const location = useLocation();
    const pathName = location.pathname;
    return(
        <Navbar className="navbar fixed-bottom navbar-light bg-light ">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink className={({ isActive }) => isActive ? "active bottom-nav-link" : "bottom-nav-link"} to="/agency/estates">  ملک ها   </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active bottom-nav-link" : "bottom-nav-link"} to="/agency/customers">  مشتریان   </NavLink>
                    <NavLink className={({ isActive }) => isActive ? "active bottom-nav-link" : "bottom-nav-link"} to="/agency/groupSms"> پیامک گروهی</NavLink>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AgencyBottomNav;