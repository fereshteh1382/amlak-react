import React, { useContext } from "react";
import Helmet from "react-helmet";
import { context } from "./../context/context";

const Register = () => {
    const registerContext = useContext(context);

    const {
        fullname,
        setFullname,
        mobile,
        setMobile,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        // policy,
        //  setPolicy,
        handleRegister,
        validator
    } = registerContext;

    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> عضویت در سایت </h2>
                </header>
                <Helmet>
                    <title>مدیریت املاک | عضویت در سایت</title>
                </Helmet>

                <div className="form-layer">
                    <form onSubmit={e => handleRegister(e)}>
                        <div className="input-group">
                            <span className="input-group-addon" id="fullname">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                name="fullname"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="fullname"
                                value={fullname}
                                onChange={e => {
                                    setFullname(e.target.value);
                                    validator.current.showMessageFor(
                                        "fullname"
                                    );
                                }}
                            />
                            {validator.current.message(
                                "fullname",
                                fullname,
                                "required|alpha|min:5"
                            )}
                        </div>

                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="mobile"
                            >
                                <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                placeholder="موبایل"
                                aria-describedby="mobile"
                                value={mobile}
                                onChange={e => {
                                    setMobile(e.target.value);
                                    validator.current.showMessageFor("mobile");
                                }}
                            />
                            {validator.current.message(
                                "mobile",
                                mobile,
                                "required|phone"
                            )}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                value={password}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor(
                                        "password"
                                    );
                                }}
                            />
                            {validator.current.message(
                                "password",
                                password,
                                "required|min:5"
                            )}
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="confirmPassword">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="رمز عبور تکرار"
                                aria-describedby="confirmPassword"
                                value={confirmPassword}
                            /* onChange={e => {
                                setConfirmPassword(e.target.value);
                                validator.current.showMessageFor(
                                    "confirmPassword"
                                );
                            }} */
                            />
                            {/* {validator.current.message(
                                "confirmPassword",
                                confirmPassword,
                                "required|min:5"
                            )} */}
                        </div>
                        {/* <div className="accept-rules">
                            <label>
                                <input
                                    type="checkbox"
                                    name="policy"
                                    value={policy}
                                    onChange={e => {
                                        setPolicy(e.currentTarget.checked);
                                        validator.current.showMessageFor(
                                            "policy"
                                        );
                                    }}
                                />{" "}
                                قوانین و مقررات سایت را میپذیرم{" "}
                            </label>
                            {validator.current.message(
                                "policy",
                                policy,
                                "required"
                            )}
                        </div> */}

                        <div className="link">
                            <a href="#">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i> قوانین
                                و مقررات سایت !
                            </a>
                            <a href="/login">
                                {" "}
                                <i className="zmdi zmdi-account"></i> ورود به
                                سایت{" "}
                            </a>
                        </div>

                        <button className="btn btn-success">
                            {" "}
                            عضویت در سایت{" "}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Register;
