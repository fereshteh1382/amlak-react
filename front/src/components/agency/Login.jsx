import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import {useForm} from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faKey, faLock, faMobileRetro} from "@fortawesome/free-solid-svg-icons";
import { addAgencyUser } from "../../redux-actions/agencyUser";
import { SetUserInfoByToken } from "../../utils/TokenManagement";
import { errorMessage} from "../../utils/message";
import { checkError } from "../../utils/FormValidator";
import { loginUserApi } from "../../services/agencyUserAPIs";


const AgencyLogin = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const navigate = useNavigate(); 
    const dispatch = useDispatch();


    const condition = {
        mobile:{
            required: true,
            // pattern: patterns.email
        },
        password:{
            required: true, minLength: 6, maxLength: 30
        }
    }

    const handleLogin =  async(formdata) => {
        // setLoading(true);
        try {
            const { status, data } = await loginUserApi(formdata);
            if (status === 200) {
                const UserInfo = SetUserInfoByToken(data); 
                dispatch(addAgencyUser(UserInfo));
                navigate('/agency', { replace: true });
            }
            // setLoading(false);
        } catch (exception) {
            errorMessage(exception.message);
            // setLoading(false);
        }
    }

    return (
        <main className="agency-content">
            <div className="agency-container">
                <header className="text-light">  <h2> ورود به سایت </h2> </header>
                <Helmet>
                    <title>مدیریت املاک | ورود به سایت</title>
                </Helmet>

                <div className="form-layer">
                    <form  onSubmit={handleSubmit(handleLogin)}>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                <FontAwesomeIcon icon={faMobileRetro} className="pl-1" />
                                </span>
                            </div>
                            <input type="text"
                                className="form-control required"
                                placeholder="موبایل"
                                aria-describedby="mobile"
                                 {...register('mobile',condition.mobile)}
                                />
                        </div>   
                        {errors.mobile && checkError(errors.mobile.type,"موبایل",condition.mobile)}
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">
                                    <FontAwesomeIcon icon={faLock} className="pl-1" />
                                </span>
                            </div>
                            <input 
                                type="password"
                                className="form-control"
                                placeholder="رمز عبور "
                                aria-describedby="password"
                                {...register('password',condition.password)}
                            />
                        </div>
                        {errors.password && checkError(errors.password.type,"رمزعبور",condition.password)}
                        <div className="link">
                            <Link to="/agency/register">
                                <FontAwesomeIcon icon={faUserPlus} className="pl-1" /> عضویت در سایت
                            </Link>
                            <Link to="/agency/forgotPassword">
                                <FontAwesomeIcon icon={faKey} className="pl-1" />  رمز عبور خود را فراموش کرده ام!
                            </Link>
                        </div>

                        <div className="text-center">
                            <button className="btn btn-warning">  ورود به سایت</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AgencyLogin;
