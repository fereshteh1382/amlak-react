import { useContext, useEffect } from "react";
import { CustomerStateContext } from "../../../context/CustomerStateContext";
import {useForm} from 'react-hook-form';
import { checkError } from "../../../utils/FormValidator";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";

const CustomerForm = () =>{
    const urlParams = useParams();
    const csContext = useContext(CustomerStateContext);
    const { customerInfo, customerId,setCustomerId, condition,loadingFields,handleCustomerRegister } = csContext;
    const { register, handleSubmit, formState:{errors}, setValue } = useForm();
    
    useEffect(() => {
        if(urlParams.customerid && !isEmpty(urlParams.customerid)){
            setCustomerId(urlParams.customerid);
        }
        if(customerInfo.id){
            setValue("id",customerInfo.id);
            setValue("fullname",customerInfo.fullname);
            setValue("tel",customerInfo.tel);
            setValue("address",customerInfo.address);
            setValue("desc",customerInfo.desc);
        }else
            setValue("id",customerId);
    }, [customerId, customerInfo]);

    const ClassName = {
        form: `my-4 mx-auto ${loadingFields.loading ? "background-blur disabled":""}`,
        registerBtn:`btn btn-warning ${loadingFields.loading ? "disabled": ""}`,
    };
    return(
        <section className="agency-body-content">
            <header className="text-light text-center">
                <h1>ثبت اطلاعات مشتری </h1>
            </header>
            <div className="inner">
                <div className="account-information">
                    <form className={ClassName.form} onSubmit={handleSubmit(handleCustomerRegister)}>
                        <input type="hidden"
                            {...register("id", { value: customerId })} />
                        <div className="form-group row">
                            <label htmlFor="fullname" className="col-md-2">نام و نام خاانوادگی</label>
                            <div className="col-md-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="نام و نام خانوادگی"
                                    {...register('fullname',{...condition.fullname, value: customerInfo.fullname})} />
                                {errors.fullname && checkError(errors.fullname.type,"نام و نام خانوادگی",condition.fullname)}
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="tel" className="col-md-2">تلفن</label>
                            <div className="col-md-10">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    {...register('tel', {...condition.tel, value: customerInfo.tel})} />
                                {errors.tel && checkError(errors.tel.type,"تلفن",condition.tel)}
                            </div>    
                        </div>
                        
                        <div className="form-group row">
                            <label htmlFor="Address" className="col-md-2">آدرس</label>
                            <div className="col-md-10">
                                
                                <textarea 
                                    className="form-control" 
                                    rows="2" 
                                    {...register('address',{...condition.address, value: customerInfo.address})} ></textarea>
                                {errors.address && checkError(errors.address.type,"آدرس",condition.address)}
                            </div>    
                        </div>
                        

                        <div className="form-group row">
                            <label htmlFor="desc" className="col-md-2">توضیحات</label>
                            <div className="col-md-10">
                                <textarea 
                                    className="form-control" 
                                    rows="3" 
                                {...register('desc',condition.desc)}></textarea>
                                {errors.desc && checkError(errors.desc.type,"توضیحات",condition.desc)}
                            </div>    
                        </div>
                        

                        {/*  <div className="form-group">
                            <label htmlFor="use">user :</label>
                            <input type="text" className="form-control" placeholder="Enter fullname" id="user" value={user.id} />
                        </div> */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning" className={ClassName.registerBtn}>ذخیره اطلاعات مشتری</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CustomerForm;