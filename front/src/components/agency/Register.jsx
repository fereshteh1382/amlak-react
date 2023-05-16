import { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightToBracket, faMobileRetro, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { errorMessage} from "../../utils/message";
import { checkError } from "../../utils/FormValidator";


const Register = () => {

    const { register, handleSubmit, formState: { errors }, setError} = useForm();
    const [successMessage, setSuccessMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const ClassName = {
        form: `my-4 mx-auto ${loading ? "background-blur disabled":""}`,
        registerBtn:`button-form-submit ${loading ? "disabled": ""}`,
    };

    const condition = {
        FullName: { required: true, minLength: 5, maxLength: 50 },
        mobile: { required: true },
        password: { required: true, minLength: 6, maxLength: 30 },
        confirmPassword: { required: true, minLength: 6, maxLength: 30/*, onBlur: () => handleConfirmPassword()*/ }
    }

    const HandleRegister = async (userInfo) => {
        console.log(userInfo);
        if(userInfo.confirmPassword !== userInfo.password){
            setError("confirmPassword", { type: "ConfirmPassword" }, { shouldFocus: true });
            return;
        }
        setLoading(true);
        try {
            // const { status } = await RegisterApi(userInfo);
            // if (status === 201) {
            //     setSuccessMessage(true);
            // }
            setLoading(false);
        } catch (exp) {
            errorMessage(exp.message);
            setLoading(false);
        }
    }


    return (
        <main className="agency-content">
            <div className="agency-container">
                <header className="text-light">
                    <h2> عضویت در سایت </h2>
                </header>
                <Helmet> <title>مدیریت املاک | عضویت مشاو املاک </title> </Helmet>

                <div className="form-layer">
                    {/* <form onSubmit={e => handleRegister(e)}> */}
                    <form className={ClassName.form} onSubmit={handleSubmit(HandleRegister)}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="fullname">
                                    <FontAwesomeIcon icon={faUser} className="pl-1" />
                                </span>
                            </div> 
                            <input
                                type="text"
                                className="form-control"
                                placeholder="نام و نام خانوادگی"
                                aria-describedby="fullname"
                                {...register('fullname', condition.FullName)}
                            />
                        </div>
                        {errors.FullName && checkError(errors.FullName.type, "نام و نام خانوادگی", condition.FullName)}
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="mobile">
                                <FontAwesomeIcon icon={faMobileRetro} className="pl-1" />
                                </span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="موبایل"
                                aria-describedby="mobile"
                                {...register('mobile', condition.mobile)}
                            />
                        </div>
                        {errors.mobile && checkError(errors.mobile.type, "موبایل", condition.mobile)}
                        
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="password">
                                    <FontAwesomeIcon icon={faLock} className="pl-1" />
                                </span>
                            </div>    
                            <input
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                {...register('password', condition.password)}
                            />
                         </div>    
                        {errors.password && checkError(errors.password.type, "رمزعبور", condition.password)}

                       
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="confirmPassword">
                                    <FontAwesomeIcon icon={faLock} className="pl-1" />
                                </span>
                            </div>  
                            <input
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور تکرار"
                                aria-describedby="confirmPassword"
                                {...register('confirmPassword', condition.confirmPassword)}
                            />
                        </div>
                        {errors.confirmPassword && checkError(errors.confirmPassword.type, "تکرار رمزعبور", condition.confirmPassword)}

                        <div className="link">
                            <Link to="/agency/login">
                                <FontAwesomeIcon icon={faRightToBracket} className="pl-1" /> ورود به سایت
                            </Link>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-warning"> عضویت در سایت</button>
                        </div>    
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Register;
