import { Button, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { EditProfileApi } from "../../services/agencyUserAPIs";
import { checkError } from "../../utils/FormValidator";
import { errorMessage } from "../../utils/message";
import { getUserForAxios } from "../../utils/TokenManagement";

const AgencyDashboard = () =>{
    const agencyUser = useSelector(state => state.agencyUser);
    const { register: registers, handleSubmit: handleSubmits, formState:{errors: errorss},  } = useForm();
    const condition = { fullname:{ required: true, min:5 }, }

    const handleEditProfile =  async(formdata) => {
        try {
            const userInfo = getUserForAxios();
            const sss = await EditProfileApi({...formdata, userId:userInfo.userId} );
            console.log(sss, {...formdata, userId:userInfo.userId});
            // const { status, data } = await loginUserApi(formdata);

        } catch (exception) {
            errorMessage(exception.message);
        }
    }

    return(
        <section className="agency-body-content">
            <header><h1> داشبورد </h1></header>
            <div className="inner">
                <div className="account-information">
                    <h3> اطلاعات کاربری </h3>
                    <Form key={'s'} onSubmit={handleSubmits(handleEditProfile)}>
                    <ul> 
                        
                        <li><span className="col-md-2"> نام و نام خانوادگی :</span>
                            <Form.Control type="text" className="col-md-5 d-inline"
                                        {...registers('fullname',{...condition.fullname, value: agencyUser.Name})} />
                                    {errorss.fullname && checkError(errorss.fullname.type, "نام و نام خانوادگی", condition.fullname)}
                        </li>
                        <li><span className="col-md-2"> نام بنگاه:</span>
                            <Form.Control type="text" className="col-md-5 d-inline"
                                        {...registers('fullname',{...condition.fullname, value: agencyUser.Name})} />
                                    {errorss.fullname && checkError(errorss.fullname.type, "نام و نام خانوادگی", condition.fullname)}
                        </li>
                        <li><span className="col-md-2"> شماره تماس :</span> {agencyUser.mobile} </li>
                        <li><span className="col-md-2">  پیام کوتاه باقیمانده :</span> {agencyUser.remainingSms} </li>
                            <Row>
                                <Button variant="warning" className="mx-auto" type="submit" >ویرایش پروفایل</Button>
                            </Row>
                        
                    </ul>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default AgencyDashboard;