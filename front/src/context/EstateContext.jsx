import { isEmpty, isNull } from "lodash";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
// import { withRouter } from "react-router";
import { AddEstateApi, EditEstateApi, getAllEstateApi } from "../services/agencyEstateAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { getUserForAxios } from "../utils/TokenManagement";
import { EstateStateContext } from "./EstateStateContext";


const EstateContext = ({ children }) => {
    const navigate = useNavigate();
    const userInfo = getUserForAxios();
    const [estatesInfo, setEstatesInfo] = useState([]);
    const [estate, setEstate] = useState({});

    const condition = {
        customer:{required: true},
        category: { required: true},
        city: { required: true},
        range: { required: true},
        title: { required: true, minLength: 5},
        meterage: { required: true},
        images: { },
        price: { required: true},
        rooms: { max:5},
        yearconstruction: { max:1402},
        floor: {max:8},
        address: { required: true},
    }

    const statusOptions = [{ key: 0, value: '', text: "", label:' ' }, 
                           { key: 'public', value: 'public', text: "عمومی", label:'عمومی' },
                           { key: 'private', value: 'private', text: "شخصی", label:'شخصی' }]

    const YesNoOptions = [{ key: 0, value: '', text: "", label:' ' }, 
                          { key: 'yes', value: 'yes', text: "دارد", label:'دارد' },
                          { key: 'no', value: 'no', text: "ندارد", label:'ندارد' }]

                          
    let RoomsOptions = [];
    for (let i = 0; i < 6; i++) {
        RoomsOptions[i] = { key:i, value:i>0 ? i:'', text: `${i>0 ? i:''}`, label: `${i}` };
    }

    let YearOptions = [{ key: "0", value: '', text: "", label:' ' }];
    let ind = 1;
    for (let i = 1402; i>=1390; i--) {
        YearOptions[ind++] = { key:i, value: i, text: `${i}`, label: `${i}` };
    }
        
    let FloorOptions = [{ key: "0", value: '', text: "", label:' ' }];
    for (let i = 1; i<=10; i++) {
        FloorOptions[ind++] = { key:i, value:i, text: `${i}`, label: `${i}` };
    }          
    
    useEffect(() => {
        const fetchInfo = async () => {
            try { 
                getUserEstates();
                
            } catch (ex) {
                setEstatesInfo([]);
            }
        };
        
        
        fetchInfo();
    }, []);

    

    /************************************************* */

    const SetEsatetByID = estateid =>{
        if(estateid === 0)
            setEstate({})  
        const existed = estatesInfo.find(o => o._id === estateid);
        if (existed && existed._id) 
            setEstate(existed)
        else
            setEstate({})  
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
            if(!isEmpty(estate._id)){
                const { status } = await EditEstateApi({...estate, user: userInfo.userId});
                if (status === 200) {
                    successMessage("اطلاعات ملک با موفقیت ویرایش گردید.");
                    navigate('/agency/estates', { replace: true });
                }
            }
            else{
                const { status } = await AddEstateApi({...estate, user: userInfo.userId});
                if (status === 201) {
                    successMessage("اطلاعات ملک با موفقیت ثبت شد.");
                    navigate('/agency/estates', { replace: true });
                }
            }
            getUserEstates();
           
            
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
                estate,
                YesNoOptions,
                statusOptions,
                RoomsOptions, 
                YearOptions, 
                FloorOptions,
                setEstate,
                handleEstateInsert,
                SetEsatetByID,
            }}
        >
            {children}
        </EstateStateContext.Provider>
    );
};

export default withRouter(EstateContext);