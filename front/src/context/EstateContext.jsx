import { isNull } from "lodash";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
// import { withRouter } from "react-router";
import { getAllCustomersApi} from "../services/agencyCustomerAPIs";
import { AddEstateApi, getAllEstateApi } from "../services/agencyEstateAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { getUserForAxios } from "../utils/TokenManagement";
import { EstateStateContext } from "./EstateStateContext";


const EstateContext = ({ children }) => {
    const navigate = useNavigate();
    const userInfo = getUserForAxios();
    const [estatesInfo, setEstatesInfo] = useState([]);
    const [estate, setEstate] = useState({});
    const [allCustomers, setAllCustomers] = useState([]);

    const condition = {
        customer:{required: true},
        category: { required: true},
        city: { required: true},
        range: { required: true},
        title: { required: true, minLength: 5},
        meterage: { required: true},
        images: { },
        price: { required: true},
        rooms: { required: true, min:0, max:5},
        yearconstruction: { required: true, min: 1390, max:1402},
        floor: { required: true, min:0, max:8},
        elevator: {},
        parking: {},
        warehouse: {},
        address: {},
        desc: {},
    }

    const statusOptions = [{ key: 0, value: '', text: "", label:' ' }, 
                           { key: 'public', value: 'public', text: "عمومی", label:'عمومی' },
                           { key: 'private', value: 'private', text: "شخصی", label:'شخصی' }]

    const YesNoOptions = [{ key: 0, value: '', text: "", label:' ' }, 
                          { key: 'yes', value: 'yes', text: "دارد", label:'دارد' },
                          { key: 'no', value: 'no', text: "ندارد", label:'ندارد' }]
    useEffect(() => {
        const fetchInfo = async () => {
            try { 
                getAllCustomers();
                getUserEstates();
                
            } catch (ex) {
                setEstatesInfo([]);
                setAllCustomers([]);
            }
        };
        
        
        fetchInfo();
    }, []);

    

    /************************************************* */

    const SetEsatetByID = estateid =>{
        const existed = estatesInfo.find(o => o._id === estateid);
        if (existed && existed._id) 
            setEstate(existed)
    }

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
    
    const getUserEstates = async () => {
        const esInfo = await getAllEstateApi(userInfo.userId);
        if (esInfo.data && esInfo.data.allrealtys) {

            setEstatesInfo(esInfo.data.allrealtys);
        }
        else {
            setEstatesInfo([]);
        }

    }

    const handleEstateInsert = async estate => {
        // setLoadingFields({ loading: false, blur: true });
        try {
            estate.parking = isNull(estate.parking) ? 'no' : estate.parking;
            estate.elevator = isNull(estate.elevator) ? 'no' : estate.elevator;
            estate.warehouse = isNull(estate.warehouse) ? 'no' : estate.warehouse;
            const { status } = await AddEstateApi({...estate, user: userInfo.userId});
            if (status === 201) {
                successMessage("اطلاعات ملک با موفقیت ثبت شد.");
                getUserEstates();
                navigate('/agency/estates', { replace: true });
            }
            // setLoadingFields({ loading: false, blur: false });
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در ثبت اطلاعات رخ داده است.");
            // setLoadingFields({ loading: false, blur: false });
        }
    };


    return (
        <EstateStateContext.Provider
            value={{
                estatesInfo,
                condition,
                allCustomers,
                estate,
                YesNoOptions,
                statusOptions,
                setEstate,
                handleEstateInsert,
                SetEsatetByID
            }}
        >
            {children}
        </EstateStateContext.Provider>
    );
};

export default withRouter(EstateContext);