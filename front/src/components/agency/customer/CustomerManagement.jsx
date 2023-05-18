import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CustomerForm from "./CustomerForm";

const CustomerManagement = () =>{
    return(
        <>
            <Link to="/agency/customers" className="align-center my-3" >
                <button className="btn btn-info">
                    <FontAwesomeIcon icon={faChevronCircleLeft} className="pl-1" />
                      بازگشت به لیست مشتریان </button>
            </Link>
            <CustomerForm />
        </>
    )
}

export default CustomerManagement;