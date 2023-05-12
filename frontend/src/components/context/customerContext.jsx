import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { context } from "./context";
import { successMessage, errorMessage } from "../../utils/message";
import { RegisterCustomers } from "../../services/userService";
import { decodeToken } from "../../utils/decodeToken";
import { withRouter } from "react-router";
import { addUser } from "../../actions/user";
import { showLoading, hideLoading } from "react-redux-loading-bar";


const CustomerContext = ({ children, history }) => {
    const [fullname, setFullname] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState();

    const [, forceUpdate] = useState();

    const dispatch = useDispatch();



    /*const resetStates = () => {
        setFullname("");
        setMobile("");
        setPassword("");
        setPolicy();
    };*/


    /************************************************* */
    const handleRegisterCustomers = async event => {
        event.preventDefault();
        const customer = {
            fullname, tel, address, desc
        };

        try {
            //  if (validator.current.allValid()) {
            dispatch(showLoading());
            const { status } = await RegisterCustomers(customer);
            console.log(status);
            if (status === 201) {
                successMessage("کاربر با موفقیت ساخته شد.");
                dispatch(hideLoading());
                history.push("/login");
            } else if (status === 202) {
                errorMessage("شناسه ای با این شماره موبایل قبلا ثبت شده است.");
                dispatch(hideLoading());
                history.push("/resister");
            }
            /* } else {
                 validator.current.showMessages();
                 forceUpdate(1);
             }*/

        } catch (ex) {
            errorMessage("مشکلی در ثبت نام پیش آمده.");
            dispatch(hideLoading());
            console.log(ex);
        }
    };
    return (
        <context.Provider
            value={{
                fullname,
                /// setFullname,
                tel,
                //  setMobile,
                address,
                // setPassword,
                desc,
                // setPolicy,
                //validator,

                handleRegisterCustomers
            }}
        >
            {children}
        </context.Provider>
    );
};

export default withRouter(CustomerContext);
