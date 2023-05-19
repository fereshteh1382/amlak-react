import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { CustomerStateContext } from "../../../context/CustomerStateContext";
import { Button } from "react-bootstrap";

const Customer = ({cutomerInfo, setModal}) =>{
    const csContext = useContext(CustomerStateContext);
    const { setCustomerInfo } = csContext;
    return(
            <tr>
                <td>{cutomerInfo.fullname}</td>
                <td>{cutomerInfo.mobile}</td>
                <td>{cutomerInfo.address}</td>
                <td>{cutomerInfo.desc}</td>
                <td>
                    <Link to={`/agency/customers/${cutomerInfo._id}`} onClick={()=>setCustomerInfo(cutomerInfo)}>
                        <FontAwesomeIcon className="ml-3 text-success" icon={faEdit} />
                    </Link> 
                    <FontAwesomeIcon style={{cursor:"pointer"}} onClick={()=>{setCustomerInfo(cutomerInfo); setModal()}} className="ml-1 text-danger" icon={faTrash} />
                </td>
            </tr>
  
    )
}

export default Customer;