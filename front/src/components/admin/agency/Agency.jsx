import { faSignIn, faSms, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AdminStateContext } from "../../../context/AdminStateContext";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

const Agency = ({agencyInfo}) =>{
    const acontext = useContext(AdminStateContext);
    const {loginAsAgency, changeUserStatus} = acontext;
    return(

        <tr>
            <td>{agencyInfo.fullname}</td>
            <td>{agencyInfo.fullname}</td>
            <td>{agencyInfo.mobile}</td>
            <td><FontAwesomeIcon icon={faSignIn} onClick={()=>loginAsAgency(agencyInfo.mobile)} className="pl-1" style={{cursor: "pointer"}} /> </td>
            <td>
                {/* <FontAwesomeIcon icon={faTrash} onClick={()=>loginAsAgency(agencyInfo.mobile)} className="pl-3 text-danger" style={{cursor: "pointer"}} /> */}
                <FontAwesomeIcon icon={faSms} onClick={()=>loginAsAgency(agencyInfo.mobile)} className="pl-3 text-primary" style={{cursor: "pointer", fontSize: "20px"}} />
                <BootstrapSwitchButton checked={agencyInfo.status === 'active'}
                    onChange={()=>changeUserStatus(agencyInfo._id, agencyInfo.status)}  
                    size="xs" onlabel="فعال"  onstyle="success"  width={80} height={10}
                    offlabel="غیرفعال" offstyle="danger"  />
            </td>
        </tr>
                   
    )
}

export default Agency;