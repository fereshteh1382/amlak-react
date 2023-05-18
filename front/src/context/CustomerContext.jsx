import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { withRouter } from "../components/main/withRouter ";
// import { withRouter } from "react-router";
import { customerRegisterApi, EditCustomerApi, getNewCustomersApi } from "../services/agencyCustomerAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { getUserForAxios } from "../utils/TokenManagement";
import { CustomerStateContext } from "./CustomerStateContext";


const CustomerContext = ({ children }) => {
    const [newCustomers, setNewCustomers] = useState([]);
    const [customerId, setCustomerId] = useState(0);
    const [customerInfo, setCustomerInfo] = useState({});
    const [loadingFields, setLoadingFields] = useState({loading: false, blur:false});
    const userInfo = getUserForAxios();

    useEffect(() => {
        if(customerId!==0 && !isEmpty(customerId)){
            //api برای اطلاعات یک مشتری
            setCustomerInfo({id: customerId, fullname:"test", tel:"4728374", address:"qqq", desc:"oooo"});
        }
        const fetchInfo = async () => {
            try {
                getNewCustomer();
            } catch (ex) {
                setNewCustomers([]);
            }
        };
        fetchInfo();
    }, [customerId]);

    const condition = {
        fullname: { required: true, minLength: 5, },
        tel: { required: true, },
        address: { required: true, minLength: 10, },
        desc: {},
    }

    /************************************************* */
    const getNewCustomer = async () =>{
        const customerInfo = await getNewCustomersApi(userInfo.userId);
        if (customerInfo.data && customerInfo.data.allcustomers) {
            setNewCustomers(customerInfo.data.allcustomers);
        }
        else{
            setNewCustomers([]);
        }

    }


    const handleCustomerRegister = async customer => {
        setLoadingFields({loading: false, blur:true});
        try {
            customer.userId = userInfo.userId;
            if(customer.id!==0 && !isEmpty(customer.id)){
                const {status} = await EditCustomerApi(customer);
                if (status === 200) {
                    successMessage("اطلاعات مشتری با موفقیت ویرایش شد.");
                }
            }
            else{
                const data = await customerRegisterApi(customer);
                const {status} = data;
                if (status === 201) {
                    //باید id ارسال شود
                    setCustomerId("234234");
                    successMessage("اطلاعات مشتری با موفقیت ثبت شد.");
                }
            }
            getNewCustomer();
            setLoadingFields({loading: false, blur:false});
        } catch (ex) {
            errorMessage(ex.message ? ex.message: "مشکلی در ثبت اطلاعات رخ داده است.");
            setLoadingFields({loading: false, blur:false});
        }
    };


    return (
        <CustomerStateContext.Provider
            value={{
                newCustomers,
                customerId,
                customerInfo,
                condition,
                loadingFields,
                handleCustomerRegister,
                setCustomerId,
            }}
        >
            {children}
        </CustomerStateContext.Provider>
    );
};

export default withRouter(CustomerContext);