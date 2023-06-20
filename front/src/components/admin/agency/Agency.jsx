import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AdminStateContext } from "../../../context/AdminStateContext";

const Agency = ({agencyInfo}) =>{
    const acontext = useContext(AdminStateContext);
    const {loginAsAgency} = acontext;
    return(

        <tr>
            <td>{agencyInfo.fullname}</td>
            <td>{agencyInfo.fullname}</td>
            <td>{agencyInfo.mobile}</td>
            <td><FontAwesomeIcon icon={faSignIn} onClick={()=>loginAsAgency(agencyInfo.mobile)} className="pl-1" style={{cursor: "pointer"}} /> </td>
        </tr>
                   
    )
}

export default Agency;