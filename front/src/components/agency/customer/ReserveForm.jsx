import { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { CustomerStateContext } from "../../../context/CustomerStateContext";
import { checkError } from "../../../utils/FormValidator";

const ReserveForm = () =>{
    const { register, handleSubmit, formState:{errors},  } = useForm();
    const csContext = useContext(CustomerStateContext);
    const { handleRezervDateForCustomers } = csContext;

    const condition = {
        rezervdate:{
            required: true,
        },
        rezervtime:{
            required: true
        }
    }
    return (
        <Form onSubmit={handleSubmit(handleRezervDateForCustomers)}>
            <Row className="mb-3">
                <Form.Group as={Col} >
                    <Form.Label>تاریخ</Form.Label>
                    <Form.Control type="date" placeholder=""
                        {...register('rezervdate',{...condition.rezervdate})} />
                    {errors.rezervdate && checkError(errors.rezervdate.type, "تاریخ", condition.rezervdate)}
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>ساعت</Form.Label>
                    <Form.Control type="time"
                        {...register('rezervtime',{...condition.rezervtime})} />
                    {errors.rezervtime && checkError(errors.rezervtime.type, "ساعت", condition.rezervtime)}
                </Form.Group>
            </Row>
            <Row>
                <Button variant="warning" className="mx-auto" type="submit" >رزرو وقت</Button>
            </Row>
        </Form>
    )
}

export default ReserveForm;