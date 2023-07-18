import { Navigate } from "react-router-dom";
import Helmet from "react-helmet";
import {useForm} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileRetro} from "@fortawesome/free-solid-svg-icons";
import { existUser,    GetMobileToken } from "../../utils/TokenManagement";
import { errorMessage} from "../../utils/message";
import { checkError } from "../../utils/FormValidator";
import {  VerifyCodeApi } from "../../services/agencyUserAPIs";
import { useState } from "react";
import { isEmpty } from "lodash";


const VerifySms = () => {
    const [successMessage, setSuccessMessage] = useState(false);
    const { register, handleSubmit, formState:{errors} } = useForm();
    const mobile = GetMobileToken();
    if(existUser() || !mobile){
        return <Navigate to="/agency" replace="true" />;
    }

    const condition = {
        smscode:{
            required: true,
        },
    }

    const handleVerifyCode =  async(formdata) => {
        try {
            if(isEmpty( formdata.smscode)){
                errorMessage("خطا در کدتایید");
                return;
            }
           
            const { status} = await VerifyCodeApi(mobile, formdata.smscode);
            if (status === 200) {
                //RemovetMobileToken();
                setSuccessMessage(true);
            }else{
                errorMessage("خطا در کدتایید ارسالی");
            }
        } catch (exception) {
            errorMessage(exception.message);
        }
    }

    return (
        <main className="agency-content">
            <Helmet>
                <title>مدیریت املاک | ارسال پیامک تایید </title>
            </Helmet>
            {
             successMessage ? 
                <div className="alert alert-success mx-auto col-md-10  text-center" >ثبت نام شما با موفقیت انجام گردید و اکانت شما پس از بررسی توسط مدیر در 24 ساعت آینده فعال خواهد شد
                </div> :
                    
                    <div className="agency-container">
                        <header className="text-light">  <h2>تایید شماره موبایل</h2> </header>
                        
                        <p>
                            لطفا کد تایید 4 رقمی ارسال شده به {mobile} را وارد نمایید
                        </p>
                        <div className="form-layer">
                            <form  onSubmit={handleSubmit(handleVerifyCode)}>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <FontAwesomeIcon icon={faMobileRetro} className="pl-1" />
                                        </span>
                                    </div>
                                    <input type="text"
                                        className="form-control required"
                                        placeholder="کدتایید پیامک شده"
                                        aria-describedby="smscode"
                                        {...register('smscode',condition.smscode)}
                                        />
                                </div>   
                                {errors.smscode && checkError(errors.smscode.type,"کدتایید",condition.smscode)}
                                {/* <div className="link">
                                    <Link to="/agency/forgotPassword">
                                        <FontAwesomeIcon icon={faKey} className="pl-1" /> ارسال مجدد پیامک
                                    </Link>
                                </div> */}

                                <div className="text-center">
                                    <button className="btn btn-warning">  ارسال کد تایید</button>
                                </div>
                            </form>
                        </div>
                    </div>
                
                }
        </main>
    );
};

export default VerifySms;
