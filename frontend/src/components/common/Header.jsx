import React from "react";

const Header = () => {
    return (
        <React.Fragment>
            <header>
                <a href="" className="logo">
                    <img src="images/logo0.png" />
                </a>
                <h1> مدیریت املاک</h1>
                <h2>وبسایت به مشاورین املاک / بنگاه های فعال این امکان رو میدهد که بتوانند فایل ها و
                    .مشتریان خود رو مدیریت کنند </h2>
            </header>
            <div className="search-form">
                <form>
                    <input
                        type="text"
                        name=""
                        placeholder="جستجو..."
                    />
                    <button>
                        <i className="zmdi zmdi-search"></i>
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Header;
