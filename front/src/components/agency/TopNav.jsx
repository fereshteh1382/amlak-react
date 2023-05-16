import { Link } from "react-router-dom";

const AgencyTopNav = () =>{
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
                        <div className="col-sm-6 col-xs-12">
                            <div className="clientarea">
                                <div className="loggein ">
                                    <i className="zmdi zmdi-account"></i>
                                    <a href="/logout">خروج</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AgencyTopNav;