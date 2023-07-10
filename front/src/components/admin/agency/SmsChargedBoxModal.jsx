import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { checkError } from "../../../utils/FormValidator";

const SmsChargedBoxModal = ({show, handleChargedSms, handleClose}) =>{
    const { register: registers, handleSubmit: handleSubmits, formState:{errors: errorss},  } = useForm();
    const condition = {
        smscount:{
            required: true,
            min:1
        },
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Form key={'s'} onSubmit={handleSubmits(handleChargedSms)}>
                    <Form.Group as={Row} className="mb-3 pr-2" >
                        <Form.Label column sm="3" >تعداد پیام کوتاه</Form.Label>
                        <Col sm="4">
                            <Form.Control type="text"
                                {...registers('smscount',{...condition.smscount, value: 0})} />
                            
                        </Col>
                        <Col sm="4">
                            <Button variant="warning" className="mx-auto" type="submit" >شارژ پنل پیامک</Button>
                        </Col>
                        {errorss.smscount && checkError(errorss.smscount.type, "تعداد پیام کوتاه", condition.smscount)}
                    </Form.Group>

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

export default SmsChargedBoxModal;