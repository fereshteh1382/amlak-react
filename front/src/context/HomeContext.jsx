import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
import { getAllPublicEstate } from "../redux-actions/estate";
import { getEstateInfoApi } from "../services/agencyEstateAPIs";
import { errorMessage } from "../utils/message";
// import { withRouter } from "react-router";
import { HomeStateContext } from "./HomeStateContext";


const HomeContext = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const [selectedEstateInfo, setSelectedEstateInfo] = useState({});
    
    useEffect(() => {
        dispatch(getAllPublicEstate());
    }, []);
    

    const showSelectedEstate = async(id) =>{
        try {
            
            const output = await getEstateInfoApi(id);
            console.log(output)
            if (output.status === 200) {
                navigate(`/estate/${id}`);
            }
        } catch (ex) {
            errorMessage(ex.message ? ex.message : "مشکلی در انجام عملیات رخ داده است.");
        }
         
        // const AllEstates = useSelector(state => state.publicEstates);
        // // const existed = AllEstates.find(o => o.SkillName.toLowerCase() === skillName.toLowerCase());
        // if(existed && existed.id){
        //     newSkill.id = toString(existed.id);
        // }

        

    }
    return (
        <HomeStateContext.Provider
            value={{
                selectedEstateInfo,
                setSelectedEstateInfo,
                showSelectedEstate,
            }}
        >
            {children}
        </HomeStateContext.Provider>
    );
};

export default withRouter(HomeContext);