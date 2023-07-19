import { isEmpty, isNull } from "lodash";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
// import { withRouter } from "react-router";
import { AddEstateApi, EditEstateApi, getAllEstateApi, SetPublicEstateApi, SetPrivateStateApi, RegisterImage } from "../services/agencyEstateAPIs";
import { errorMessage, successMessage } from "../utils/message";
import { getUserForAxios } from "../utils/TokenManagement";
import { EstateStateContext } from "./EstateStateContext";


const EstateContext = ({ children }) => {
    const navigate = useNavigate();
    const userInfo = getUserForAxios();
    const [estatesInfo, setEstatesInfo] = useState([]);
    const [estate, setEstate] = useState({});
    const [mainFile, setMainFile] = useState({ fileName: '', fileValue: '', uploaded: '', fileError:'', deletedFile:"0" });
    const [image2File, setImage2File] = useState({ fileName: '', fileValue: '', uploaded: '', fileError:'', deletedFile:"0" });
    const [image3File, setImage3File] = useState({ fileName: '', fileValue: '', uploaded: '', fileError:'', deletedFile:"0" });

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
    const handleMainfileChange = (e) => {
        const fileInfo = e.target.files[0];
        (fileInfo.type === 'application/jpg' || fileInfo.type === 'application/jpeg' || fileInfo.type ==="image/png") ? 
            setMainFile({ ...mainFile, fileName: fileInfo.name, fileValue: fileInfo , fileError:''})
        :   setMainFile({ ...mainFile, fileName: '', fileValue: '', fileError: "the file format is invalid(accepted: png or jpg)"  }) 
    };

    const handleImage2fileChange = (e) => {
        const fileInfo = e.target.files[0];
        (fileInfo.type === 'application/jpg' || fileInfo.type === 'application/jpeg' || fileInfo.type ==="image/png") ? 
            setImage2File({ ...mainFile, fileName: fileInfo.name, fileValue: fileInfo , fileError:''})
        :   setImage2File({ ...mainFile, fileName: '', fileValue: '', fileError: "the file format is invalid(accepted: png or jpg)"  }) 
    };

    const handleImage3fileChange = (e) => {
        const fileInfo = e.target.files[0];
        (fileInfo.type === 'application/jpg' || fileInfo.type === 'application/jpeg' || fileInfo.type ==="image/png") ? 
            setImage3File({ ...mainFile, fileName: fileInfo.name, fileValue: fileInfo , fileError:''})
        :   setImage3File({ ...mainFile, fileName: '', fileValue: '', fileError: "the file format is invalid(accepted: png or jpg)"  }) 
    };

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
                let formdata = new FormData();
                formdata.append("realtyid", estate._id);
                let hasFile = false;
                if(mainFile.fileValue!==""){
                    formdata.append("thumbnail1", mainFile.fileValue);
                    hasFile = true;
                }
                if(image2File.fileValue!==""){
                    formdata.append("thumbnail2", image2File.fileValue);
                    hasFile = true;
                }
                if(image3File.fileValue!==""){
                    formdata.append("thumbnail3", image3File.fileValue);
                    hasFile = true;
                }    
                
                if(hasFile){
                        const eee = await RegisterImage(mainFile.fileValue);
                        errorMessage(eee);
                }
                const { status } = await EditEstateApi({...estate, user: userInfo.userId});
                if (status === 200) {
                    successMessage("اطلاعات ملک با موفقیت ویرایش گردید.");
                    navigate('/agency/estates', { replace: true });
                }
            }
            else{
                const { status, data } = await AddEstateApi({...estate, user: userInfo.userId});
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

    const changeEstateStatus = async (estateid, estatestatus) => {
        try {

                if(isEmpty(estateid) && estatestatus !== 'public' && estatestatus !== 'private'){
                    errorMessage("خطا در وضعیت ملک");
                    return;
                }

                const { data, status } = (estatestatus == 'public') ? 
                    await SetPrivateStateApi(estateid) : await SetPublicEstateApi(estateid);
                
                
                if (status == 200) {
                    successMessage("تغییر وضعیت ملک با موفقیت انجام گردید.");
                }
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در انجام عملیات رخ داده است.");
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
                mainFile,
                image2File,
                image3File,
                setEstate,
                handleEstateInsert,
                SetEsatetByID,
                changeEstateStatus,
                handleMainfileChange,
                handleImage2fileChange,
                handleImage3fileChange
            }}
        >
            {children}
        </EstateStateContext.Provider>
    );
};

export default withRouter(EstateContext);