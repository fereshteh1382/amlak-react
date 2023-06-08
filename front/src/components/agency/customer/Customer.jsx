import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus, faEdit, faListDots, faMessage, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CustomerStateContext } from "../../../context/CustomerStateContext";
import { Button } from "react-bootstrap";

const Customer = ({ cutomerInfo }) => {
    const csContext = useContext(CustomerStateContext);
    const { setCustomerInfo,
        handleReserveShow, setReserveContent,
        handleDeleteShow,
        handleSmsShow
    } = csContext;


    return (
        <tr>
            <td>{cutomerInfo.fullname}</td>
            <td>{cutomerInfo.tel}</td>
            <td>{cutomerInfo.address}</td>
            <td>{cutomerInfo.desc}</td>
            <td>
                {/* <FontAwesomeIcon 
                        className= "text-warning" 
                        style={{cursor:"pointer"}} 
                        icon={faListDots} 
                        title="مشاهده لیست رزرو وقت"  
                        onClick={()=>{setCustomerInfo(cutomerInfo); handleReserveShow(); setReserveContent("list")}}
                    /> */}
                <FontAwesomeIcon
                    className="mr-3 text-primary"
                    style={{ cursor: "pointer" }}
                    icon={faCalendarPlus}
                    title="رزرو وقت"
                    onClick={() => { setCustomerInfo(cutomerInfo); handleReserveShow(); setReserveContent("form") }} />
            </td>
            <td>
                <Link to={`/agency/customers/${cutomerInfo._id}`} onClick={() => setCustomerInfo(cutomerInfo)}>
                    <FontAwesomeIcon className="ml-3 text-success" icon={faEdit} />
                </Link>
                <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={() => { setCustomerInfo(cutomerInfo); handleDeleteShow() }} className="ml-3 text-danger" icon={faTrash} />
                <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={() => { setCustomerInfo(cutomerInfo); handleSmsShow() }} className="ml-3 text-info" icon={faMessage} />
            </td>
        </tr>

    )
}

export default Customer;