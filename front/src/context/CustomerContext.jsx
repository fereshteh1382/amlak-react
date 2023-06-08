import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { withRouter } from "../components/main/withRouter ";
import { getAllCustomersApi, customerRegisterApi, DeleteCustomerApi, EditCustomerApi, getNewCustomersApi, RezervDateForCustomerApi, SendSmsToCustomerApi } from "../services/agencyCustomerAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { getUserForAxios } from "../utils/TokenManagement";
import { CustomerStateContext } from "./CustomerStateContext";


const CustomerContext = ({ children }) => {
    const [newCustomers, setNewCustomers] = useState([]);
    const [customerInfo, setCustomerInfo] = useState({});
    const [loadingFields, setLoadingFields] = useState({ loading: false, blur: false });
    const userInfo = getUserForAxios();

    const [allCustomers, setAllCustomers] = useState([]);

    /** delete modal */
    const [DeleteModalShow, setDeleteModalShow] = useState(false);
    const handleDeleteClose = () => setDeleteModalShow(false);
    const handleDeleteShow = () => setDeleteModalShow(true);
    const handleDeleteAccept = () => { handleDeleteCustomer(customerInfo); handleDeleteClose() };

    /** sms modal */
    const [SmsModalShow, setSmsModalShow] = useState(false);
    const handleSmsClose = () => setSmsModalShow(false);
    const handleSmsShow = () => setSmsModalShow(true);

    /** reserve modal */
    const [reserveContent, setReserveContent] = useState("list");
    const [reserveModalShow, setReserveModalShow] = useState(false);
    const handleReserveClose = () => setReserveModalShow(false);
    const handleReserveShow = () => setReserveModalShow(true);


    /** NewCustomer modal */
    const [newCustomerModalShow, setNewCustomerModalShow] = useState(false);
    const handleNewCustomerModalClose = () => setNewCustomerModalShow(false);
    const handleNewCustomerModalShow = () => setNewCustomerModalShow(true);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                getAllCustomers();
                getNewCustomer();
            } catch (ex) {
                setNewCustomers([]);
            }
        };
        fetchInfo();
    }, []);

    const defaultVal = { _id: 0, fullname: "", tel: "", address: "", desc: "" };


    const condition = {
        fullname: { required: true, minLength: 5, },
        tel: { required: true, },
        address: {minLength: 10, },
        desc: {},
    }

    /************************************************* */

    const getAllCustomers = async () =>{
        const customerInfo = await getAllCustomersApi(userInfo.userId);
        if (customerInfo.data && customerInfo.data.allcustomers) {
            let customers = customerInfo.data.allcustomers.map((d) => ({
                key: d._id,
                value: d._id,
                text: d.fullname,
                label: d.fullname
            }));

            setAllCustomers([{ key: 0, value: '', text: "", label:' ' },...customers]);
        }
        else {
            setAllCustomers([]);
        }
    }

    const getNewCustomer = async () => {
        const customerInfo = await getNewCustomersApi(userInfo.userId);
        if (customerInfo.data && customerInfo.data.allcustomers) {
            setNewCustomers(customerInfo.data.allcustomers);
        }
        else {
            setNewCustomers([]);
        }

    }

    /**
     * insert or update Customer
     * @param object customer 
     */
    const handleCustomerRegister = async customer => {
        setLoadingFields({ loading: false, blur: true });
        try {
            customer.userId = userInfo.userId;
            if (customer.id !== 0 && !isEmpty(customer.id)) {
                const { status } = await EditCustomerApi(customer);
                if (status === 200) {
                    successMessage("اطلاعات مشتری با موفقیت ویرایش شد.");
                }
            }
            else {
                const data = await customerRegisterApi(customer);
                const { status } = data;
                if (status === 201) {
                    //باید id ارسال شود
                    // setCustomerInfo("234234");
                    successMessage("اطلاعات مشتری با موفقیت ثبت شد.");
                    handleNewCustomerModalClose();
                }
            }
            getNewCustomer();
            getAllCustomers();
            setLoadingFields({ loading: false, blur: false });
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در ثبت اطلاعات رخ داده است.");
            setLoadingFields({ loading: false, blur: false });
        }
    };


    const handleDeleteCustomer = async customer => {
        setLoadingFields({ loading: true, blur: true });
        try {

            const data = await DeleteCustomerApi(customer._id);
            const { status } = data;
            if (status === 200) {
                getNewCustomer();
                successMessage(`اطلاعات  ${customer.fullname} با موفقیت حذف گردید.`);
            }
            setLoadingFields({ loading: false, blur: false });
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در حذف اطلاعات رخ داده است.");
            setLoadingFields({ loading: false, blur: false });
        }
    }

    const handleRezervDateForCustomers = async customerReservation => {
        setLoadingFields({ loading: true, blur: true });
        try {

            const data = await RezervDateForCustomerApi({ ...customerReservation, user: userInfo.userId, customerid: customerInfo._id });
            const { status } = data;
            if (status === 201) {
                successMessage(`اطلاعات رزرو با موفقیت ثبت گردید.`);
                handleReserveClose();
            }
            setLoadingFields({ loading: false, blur: false });
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در ثبت اطلاعات رخ داده است.");
            setLoadingFields({ loading: false, blur: false });
        }
    }

    const handleSendSms = async messageBody => {
        try {
            const data = await SendSmsToCustomerApi({ customernumbers: customerInfo.tel, userId: userInfo.userId, message: messageBody });
            const { status } = data;
            if (status === 201) {
                successMessage(`پیامک با موفقیت ارسال گردید.`);
                handleReserveClose();
            }
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در ثبت ارسال پیامک رخ داده است.");
        }
    }


    return (
        <CustomerStateContext.Provider
            value={{
                defaultVal,
                newCustomers,
                customerInfo,
                allCustomers,
                condition,
                loadingFields,

                DeleteModalShow,
                reserveModalShow,
                reserveContent,

                handleCustomerRegister,
                handleDeleteCustomer,
                setCustomerInfo,

                handleDeleteAccept,
                handleDeleteClose,
                handleDeleteShow,
                handleReserveShow,
                handleReserveClose,
                setReserveContent,
                handleRezervDateForCustomers,

                SmsModalShow,
                handleSmsClose,
                handleSmsShow,
                handleSendSms,

                newCustomerModalShow,
                handleNewCustomerModalClose,
                handleNewCustomerModalShow,
            }}
        >
            {children}
        </CustomerStateContext.Provider>
    );
};

export default withRouter(CustomerContext);