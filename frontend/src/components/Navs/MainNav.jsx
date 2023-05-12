import React from "react";

const MainNav = () => {
    return (
        <div className="main-menu">
            <div className="container">
                <nav>
                    <span className="responsive-sign">
                        <i className="zmdi zmdi-menu"></i>
                    </span>
                    <ul>
                        <li>
                            <a href="">خانه</a>

                        </li>
                        <li>
                            <a href=""> لیست ملک های موجود </a>

                        </li>
                        <li>
                            <a href=""> پنل مشاور املاک</a>
                        </li>
                        <li>
                            <a href=""> آموزش </a>
                            <ul>
                                <li>
                                    <a href=""> ویدیو  </a>
                                </li>
                                <li>
                                    <a href="">  پست های آموزشی </a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="">  پشتیبانی  </a>
                            <ul>

                                <li>
                                    <a href=""> سیستم تیکت زنی</a>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MainNav;
