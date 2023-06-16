import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useLocation } from "react-router-dom";

const AdminTopNav = () =>{
    return(
        <div className="landing-layer">
            <div className="container">
                <nav>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <ul>
                                <li>
                                    <NavLink to="/admin" > داشبورد</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/admin/agency">مشاورین املاک</NavLink>
                                </li>
                            </ul>
                        </div>
                       
                        <div className="col-sm-6 col-xs-12">
                            <div className="clientarea">
                                <div className="loggein ">
                                    <Link to="/agency/logout"><FontAwesomeIcon icon={faSignOut} className="pl-1" />خروج</Link>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AdminTopNav;