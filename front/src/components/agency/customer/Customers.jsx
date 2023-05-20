import Customer from "./Customer";
import {Button, Table} from 'react-bootstrap'
import { useContext, useState } from "react";
import DeleteModal from "../../main/DeleteModal";
import ReserveModal from "./ReserveModal";
import { CustomerStateContext } from "../../../context/CustomerStateContext";
import SmsBoxModal from "../../main/SmsBoxModal";
const Customers = ({customers}) =>{
    
    const csContext = useContext(CustomerStateContext);
    const {
        DeleteModalShow, handleDeleteAccept, handleDeleteClose, 
        reserveModalShow, reserveContent,  handleReserveClose,
        SmsModalShow, handleSmsClose, handleSendSms
    
    
    } = csContext;

    return(
        <>
            <Table className="table mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>نام </th>
                        <th>تلفن</th>
                        <th>آدرس</th>
                        <th>توضیحات</th>
                        <th>رزرو وقت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((item, index) => (
                            <Customer key={index} cutomerInfo={item}  />
                        ))
                    }
                </tbody>
            </Table>
            <DeleteModal show={DeleteModalShow} handleAccept={handleDeleteAccept} handleClose={handleDeleteClose} />
            <ReserveModal show={reserveModalShow} list={reserveContent} handleClose={handleReserveClose} />
            <SmsBoxModal show={SmsModalShow} handleSendSms={handleSendSms} handleClose={handleSmsClose} />
        </>
    )
}

export default Customers;