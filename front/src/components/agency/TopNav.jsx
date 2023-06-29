import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { existUser } from "../../utils/TokenManagement";

const AgencyTopNav = () =>{
    const location = useLocation();
    const pathName = location.pathname;
    return(
        <div className="landing-layer">
            <div className="container">
                <nav>
                    <div className="row">
                        <div className="col-sm-6 col-xs-12">
                            <ul>
                                <li>
                                    <Link to="/"> املاک</Link>
                                </li>
                            </ul>
                        </div>
                        {
                            (pathName === '/agency/login' || pathName === '/agency/register' || !existUser()) ?  '' : 
                            <div className="col-sm-6 col-xs-12">
                                <div className="clientarea">
                                    <div className="loggein ">
                                        <Link to="/agency/logout"><FontAwesomeIcon icon={faSignOut} className="pl-1" />خروج</Link>
                                    </div>
                                </div>
                            </div>
                        }
                        
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AgencyTopNav;