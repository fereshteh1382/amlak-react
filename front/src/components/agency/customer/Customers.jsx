import Customer from "./Customer";
import {Button, Table} from 'react-bootstrap'
import { useState } from "react";
import DeleteModal from "../../main/DeleteModal";
const Customers = ({customers, showModal, handleAccept, handleClose, handleShow}) =>{
    

    return(
        <>
            <Table className="table mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>نام </th>
                        <th>تلفن</th>
                        <th>آدرس</th>
                        <th>توضیحات</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((item, index) => (
                            <Customer key={index} cutomerInfo={item} setModal={handleShow} />
                        ))
                    }
                </tbody>
            </Table>
            <DeleteModal show={showModal} handleAccept={handleAccept} handleClose={handleClose} />
        </>
    )
}

export default Customers;