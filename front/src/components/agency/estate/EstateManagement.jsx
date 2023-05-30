import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EstateForm from "./EstateForm";

const EstateManagement = () =>{
    return(
        <>
            <Link to="/agency/estates" className="align-center my-3" >
                <button className="btn btn-info">
                    <FontAwesomeIcon icon={faChevronCircleLeft} className="pl-1" />
                      بازگشت به  لیست املاک ثبت شده </button>
            </Link>
            <EstateForm />
        </>
    )
}

export default EstateManagement;