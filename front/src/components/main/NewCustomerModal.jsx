import { useContext } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { CustomerStateContext } from "../../context/CustomerStateContext";
import { checkError } from "../../utils/FormValidator";

const NewCustomerModal = ({show, handleClose}) =>{
    const cContext = useContext(CustomerStateContext);
    const { condition: nccondition,handleCustomerRegister } = cContext;

    const { register: register2, handleSubmit: handleSubmit2, formState:{errors: errors2} } = useForm({
        mode: "onBlur",
      });
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Form  key={'2'} onSubmit={handleSubmit2(handleCustomerRegister)}>
                    <Row className="mb-3">
                        <Col md={3}>
                            <Form.Label>نام و نام خاانوادگی</Form.Label>
                        </Col>
                        <Col md={9}>    
                            <Form.Control type="text"  
                                    {...register2('fullname',{...nccondition.fullname})} />
                                    {errors2.fullname && checkError(errors2.fullname.type,"نام و نام خانوادگی",nccondition.fullname)}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                            <Col md={3}>
                                <Form.Label>تلفن</Form.Label>
                            </Col>
                            <Col md={5}>
                                <Form.Control type="text"  
                                        {...register2('tel', {...nccondition.tel})} />
                                {errors2.tel && checkError(errors2.tel.type,"تلفن",nccondition.tel)}
                            </Col>
                    </Row>
                    <Row>
                        <Button variant="warning" className="mx-auto" type="submit" >ثبت اطلاعات مشتری</Button>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    انصراف
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewCustomerModal;