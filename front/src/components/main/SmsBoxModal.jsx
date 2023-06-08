import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { checkError } from "../../utils/FormValidator";

const SmsBoxModal = ({show, handleSendSms, handleClose}) =>{
    const { register: registers, handleSubmit: handleSubmits, formState:{errors: errorss},  } = useForm();
    const condition = {
        message:{
            required: true,
        },
    }

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Form key={'s'} onSubmit={handleSubmits(handleSendSms)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>متن پیام کوتاه</Form.Label>
                            <Form.Control as="textarea" rows={3} 
                                {...registers('message',{...condition.message})} />
                            {errorss.message && checkError(errorss.message.type, "متن پیام کوتاه", condition.message)}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Button variant="warning" className="mx-auto" type="submit" >ارسال پیام کوتاه</Button>
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

export default SmsBoxModal;