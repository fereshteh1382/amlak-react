import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { context } from "./context";
import { successMessage, errorMessage } from "./../../utils/message";
import { loginUser, registerUser } from "../../services/userService";
import { decodeToken } from "./../../utils/decodeToken";
import { withRouter } from "react-router";
import { addUser } from "./../../actions/user";
import { showLoading, hideLoading } from "react-redux-loading-bar";


const UserContext = ({ children, history }) => {
    const [fullname, setFullname] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [policy, setPolicy] = useState();

    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی میباشد",
                min: "کمتر از 5 کاراکتر نباید باشد",
                email: "ایمیل نوشته شده صحیح نمی باشد",
                mobile: "شماره موبایل صحیحی نیست ",
                // minmobile: "کمتر از 11 کاراکتر نباید باشد",

            },
            element: message => <div style={{ color: "red" }}>{message}</div>
        })
    );

    const resetStates = () => {
        setFullname("");
        setMobile("");
        setPassword("");
        setPolicy();
    };

    const handleLogin = async event => {
        event.preventDefault();
        const user = { mobile, password };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                const { status, data } = await loginUser(user);
                //  console.log(status);
                if (status === 200) {
                    successMessage("ورود موفقیت آمیز بود.");
                    localStorage.setItem("token", data.token);
                    dispatch(addUser(decodeToken(data.token).payload.user));
                    dispatch(hideLoading());
                    history.replace('/');
                    resetStates();
                }
            } else {
                validator.current.showMessages();

                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            dispatch(hideLoading());
            errorMessage("ورود موفقیت آمیز نبود.");
        }
    };
    /************************************************* */
    const handleRegister = async event => {
        event.preventDefault();
        const user = {
            fullname,
            mobile,
            password
        };

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                const { status } = await registerUser(user);
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
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
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
                setFullname,
                mobile,
                setMobile,
                password,
                setPassword,
                policy,
                setPolicy,
                validator,
                handleLogin,
                handleRegister
            }}
        >
            {children}
        </context.Provider>
    );
};

export default withRouter(UserContext);
