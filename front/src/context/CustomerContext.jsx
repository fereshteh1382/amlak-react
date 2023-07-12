import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "../components/main/withRouter ";
import { setNumberOfRemainingSmsAgency } from "../redux-actions/agencyUser";
import { getAllCustomersApi, customerRegisterApi, DeleteCustomerApi, EditCustomerApi, getNewCustomersApi, RezervDateForCustomerApi, SendSmsToCustomerApi, SearchCustomerApi } from "../services/agencyCustomerAPIs";
import { RemainingSmsCountApi } from "../services/agencyUserAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { getUserForAxios } from "../utils/TokenManagement";
import { CustomerStateContext } from "./CustomerStateContext";


const CustomerContext = ({ children }) => {
    const dispatch = useDispatch();

    const [newCustomers, setNewCustomers] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
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
        address: { minLength: 10, },
        desc: {},
    }

    /************************************************* */

    const getAllCustomers = async () => {
        const customerInfo = await getAllCustomersApi(userInfo.userId);
        if (customerInfo.data && customerInfo.data.allcustomers) {
            let customers = customerInfo.data.allcustomers.map((d) => ({
                key: d._id,
                value: d._id,
                text: d.fullname,
                label: d.fullname
            }));

            setAllCustomers([{ key: 0, value: '', text: "", label: ' ' }, ...customers]);
        }
        else {
            setAllCustomers([]);
        }
    }

    const getNewCustomer = async () => {
        setIsSearch(false);
        const customerInfo = await getNewCustomersApi(userInfo.userId);
        if (customerInfo.data && customerInfo.data.allcustomers) {
            setNewCustomers(customerInfo.data.allcustomers);
        }
        else {
            setNewCustomers([]);
        }

    }

    const SearchCustomer = async (cusomerInfo) => {
        let customerInfo = [];
        setIsSearch(true);
        if(isEmpty(cusomerInfo.name))
            customerInfo = await getNewCustomersApi(userInfo.userId);
        else  
            customerInfo = await SearchCustomerApi(userInfo.userId, cusomerInfo.name);

        if (customerInfo.data && customerInfo.data.allcustomers) {
            setNewCustomers(customerInfo.data.allcustomers);
        }
        else if (customerInfo.data && customerInfo.data.searchcustomer) {
            setNewCustomers(customerInfo.data.searchcustomer);
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
            const data = await RezervDateForCustomerApi({ ...customerReservation, user: userInfo.userId, customerid: customerInfo._id, customernumber: customerInfo.tel });
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
            const data = await SendSmsToCustomerApi({ userId: userInfo.userId, customernumbers: customerInfo.tel, message: messageBody });
            const { status } = data;
            if (status === 201) {
                successMessage(`پیامک با موفقیت ارسال گردید.`);
                const smsdata = await RemainingSmsCountApi({ userid: userInfo.userId });
                if (smsdata.status === 200 && smsdata.data && smsdata.data.smscount) {
                    dispatch(setNumberOfRemainingSmsAgency(smsdata.data.smscount));
                }

                handleSmsClose();
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

                isSearch,

                SearchCustomer,
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