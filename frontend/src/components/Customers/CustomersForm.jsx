import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { isEmpty } from "lodash";
import { context } from "./../context/context";

const Customers = () => {
    const user = useSelector(state => state.user);
    const registerContext = useContext(context);
    const { fullname, tel, address, desc, handleRegisterCustomers } = registerContext;
    /*const {
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
        handleRegisterCustomers,
        validator
    } = registerContext;*/

    if (isEmpty(user)) return <Redirect to="/" />;

    return (
        <div className="user-account">
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-12">
                    <aside>
                        <div className="avatar-layer">
                            <div className="img-layer">
                                <a href="" className="change-image">
                                    <i className="zmdi zmdi-edit"></i>
                                </a>
                                <img src="images/pic/avatar.jpg" />
                            </div>
                            <div className="detail">
                                <span>{user.fullname}</span>
                                <span>{user.mobile}</span>

                                <span> تاریخ عضویت :  {user.createdAt} </span>
                            </div>
                        </div>

                        <section>
                            <header>
                                <h3> میز کار </h3>
                            </header>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <Link to="/customers">
                                            {" "}
                                            مشتریان{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <Link to="/logout">
                                            {" "}
                                            ملک ها  {" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <Link to="/logout">
                                            {" "}
                                            قراردادها {" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <Link to="/logout">
                                            {" "}
                                            خروج از حساب کاربری{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </aside>
                </div>
                <div className="col-md-9 col-sm-8 col-xs-12">
                    <section className="user-account-content">
                        <header>
                            <h1> مشتریان </h1>
                        </header>
                        <div className="inner">
                            <div className="account-information">
                                <h3> فرم ثبت مشتری</h3>
                                <form onSubmit={e => handleRegisterCustomers(e)} >
                                    <div class="form-group">
                                        <label for="fullname">fullname :</label>
                                        <input type="text" class="form-control" placeholder="Enter fullname" id="fullname" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Tel:</label>
                                        <input type="text" class="form-control" placeholder="Enter Tel" id="tel" />
                                    </div>
                                    <div class="form-group">
                                        <label for="Address">Address:</label>
                                        <textarea class="form-control" rows="5" id="Address"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="comment">Comment:</label>
                                        <textarea class="form-control" rows="5" id="desc"></textarea>
                                    </div>

                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Customers;
