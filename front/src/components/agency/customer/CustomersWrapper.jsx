import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Customers from "./Customers";
import { CustomerStateContext } from "../../../context/CustomerStateContext";
import { Alert } from "react-bootstrap";


const CustomersWrapper = ({mode}) =>{
    const csContext = useContext(CustomerStateContext);
    const {newCustomers, customerInfo, handleDeleteCustomer } = csContext;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAccept = () =>{handleDeleteCustomer(customerInfo); handleClose()};

    return(
        <>
            <Link to="/agency/customers/new" className="btn btn-success">
                <FontAwesomeIcon icon={faUserPlus} className="pl-1" /> ثبت اطلاعات مشتری جدید
            </Link>
            <br/>
            <br/>
            {newCustomers.length>0 ? 
            <>
                <Search />
                <Customers customers={newCustomers} showModal={show} handleAccept={handleAccept} 
                    handleClose={handleClose} handleShow={handleShow} />
            </> : 
            <Alert variant="info" >تاکنون اطلاعاتی از مشتریان شما ثبت نشده است</Alert>
            }
            
        </>
    )
}

export default CustomersWrapper;