import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Customers from "./Customers";
import { CustomerStateContext } from "../../../context/CustomerStateContext";
import { Alert, Col } from "react-bootstrap";


const CustomersWrapper = ({mode}) =>{
    const csContext = useContext(CustomerStateContext);
    const {newCustomers, isSearch} = csContext;
    const msg = isSearch ? 'رکوردی یافت نشد'  : 'تاکنون اطلاعاتی از مشتریان شما ثبت نشده است';
    return(
        <>
            <Link to="/agency/customers/new" className="btn btn-success">
                <FontAwesomeIcon icon={faUserPlus} className="pl-1" /> ثبت اطلاعات مشتری جدید
            </Link>
            <br/>
            <br/>
            
            {newCustomers.length>0  || isSearch ? <Search /> : '' }
            {newCustomers.length>0 ? <Col><Customers customers={newCustomers}  /></Col> : '' }
            {newCustomers.length == 0 ?  <Alert variant="info" >{msg}</Alert> : ''}    
           
        </>
    )
}

export default CustomersWrapper;