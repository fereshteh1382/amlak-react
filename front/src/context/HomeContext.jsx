import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { withRouter } from "../components/main/withRouter ";
import { getAllPublicEstate } from "../redux-actions/estate";
// import { withRouter } from "react-router";
import { HomeStateContext } from "./HomeStateContext";


const HomeContext = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const [selectedEstateInfo, setSelectedEstateInfo] = useState({});
    
    useEffect(() => {
        dispatch(getAllPublicEstate());
    }, []);
    

    const showSelectedEstate = (id) =>{
        // const AllEstates = useSelector(state => state.publicEstates);
        // // const existed = AllEstates.find(o => o.SkillName.toLowerCase() === skillName.toLowerCase());
        // if(existed && existed.id){
        //     newSkill.id = toString(existed.id);
        // }

        navigate(`/estate/${id}`);

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