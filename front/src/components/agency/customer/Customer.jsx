import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const Customer = ({cutomerInfo}) =>{
    return(
            <tr>
                <td>{cutomerInfo.fullname}</td>
                <td>{cutomerInfo.mobile}</td>
                <td>{cutomerInfo.address}</td>
                <td>{cutomerInfo.desc}</td>
                <td>
                    <Link to={`/agency/customers/${cutomerInfo._id}`}>
                        <FontAwesomeIcon className="ml-3 text-success" icon={faEdit} />
                    </Link>  
                    <FontAwesomeIcon style={{cursor:"pointer"}} className="ml-1 text-danger" icon={faTrash} />
                </td>
            </tr>
  
    )
}

export default Customer;