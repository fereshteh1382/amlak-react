// import Customer from "./Customer";
// import {Button, Table} from 'react-bootstrap'
// import { useContext, useState } from "react";
// import DeleteModal from "../../main/DeleteModal";
// import ReserveModal from "./ReserveModal";
// import { CustomerStateContext } from "../../../context/CustomerStateContext";

import { Container, Row } from "react-bootstrap";
import Estate from "./Estate";

// import SmsBoxModal from "../../main/SmsBoxModal";
const Estates = ({estates}) =>{
    
    // const csContext = useContext(CustomerStateContext);
    // const {
    //     DeleteModalShow, handleDeleteAccept, handleDeleteClose, 
    //     reserveModalShow, reserveContent,  handleReserveClose,
    //     SmsModalShow, handleSmsClose, handleSendSms
    
    
    // } = csContext;

    return(
        <Container>
            <Row>
                {
                    estates.map((item, index) => (
                        <Estate key={index} EstateInfo={item}  />
                    ))
                }
        
            </Row>
        </Container>
    )
}

export default Estates;