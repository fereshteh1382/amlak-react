import { useContext } from "react";
import { Link } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome } from "@fortawesome/free-solid-svg-icons";
import { EstateStateContext } from "../../../context/EstateStateContext";
import Esatets from "./Estates";



const EstatesWrapper = () =>{
    const esContext = useContext(EstateStateContext);
    const {estatesInfo} = esContext;
   
    return(
        <>
            <Container className="text-center">
                <Link to="/agency/estates/new" className="btn btn-success">
                    <FontAwesomeIcon icon={faHome} className="pl-1" /> ثبت ملک جدید
                </Link>
            </Container>
            
            <br/>
            <br/>
            {estatesInfo.length>0 ?  <Esatets estates={estatesInfo} /> : 
                <Alert variant="info" >تاکنون هیچ ملکی توسط شما ثبت نشده است</Alert>
            }
            
        </>
    )
}

export default EstatesWrapper;