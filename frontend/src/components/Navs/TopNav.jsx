import React from "react";
import { isEmpty } from "lodash";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const TopNav = () => {
    const user = useSelector(state => state.user);

    return (
        <nav>
            <div className="row">
                <div className="col-sm-6 col-xs-12">
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                exact
                                activeStyle={{ color: "#e4690d" }}
                            >
                                {" "}
                                صفحه اصلی{" "}
                            </NavLink>
                            <a href=""> درباره ما </a>
                            <a href=""> تماس با ما </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <div className="clientarea">
                        {!isEmpty(user) ? (
                            <div className="loggein ">
                                <i className="zmdi zmdi-account"></i>
                                <NavLink to="/user-profile">
                                    {/* {user.fullname} */}
                                    پنل کاربری
                                </NavLink>{" "}
                                / <NavLink to="/logout">خروج</NavLink>
                            </div>
                        ) : (
                            <div className="signin ">
                                <i className="zmdi zmdi-account"></i>
                                <NavLink
                                    to="/login"
                                    activeStyle={{ color: "#e4690d" }}
                                >
                                    {" "}
                                    ورود{" "}
                                </NavLink>{" "}
                                /
                                <NavLink
                                    to="/register"
                                    activeStyle={{ color: "#e4690d" }}
                                >
                                    {" "}
                                    عضویت{" "}
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
