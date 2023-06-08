import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import { setNumberOfRemainingSmsAgency } from "../../redux-actions/agencyUser";
import { RemainingSmsCountApi, SendSmsToAllCustomerApi } from "../../services/agencyUserAPIs";
import { checkError } from "../../utils/FormValidator";
import { errorMessage, successMessage } from "../../utils/message";
import { getUserId } from "../../utils/TokenManagement";

const GroupSms = () =>{
    const dispatch = useDispatch();
    const { register: registers, handleSubmit: handleSubmits, formState:{errors: errorss},  } = useForm();
    const condition = { message:{ required: true, min:5 }, }

    const handleSendGroupSms =  async(formdata) => {
        try {
            const userid = getUserId();
            const { status, data } = await SendSmsToAllCustomerApi({userId:userid,  message: formdata.message});
            if (status === 201) {
                successMessage(`پیامک با موفقیت برای ${data.count}نفر از مشتریان ارسال گردید.`);
                const smsdata = await RemainingSmsCountApi({userid});
                if (smsdata.status === 200 && smsdata.data && smsdata.data.smscount ) {
                    dispatch(setNumberOfRemainingSmsAgency(smsdata.data.smscount));
                }
            }
        } catch (exception) {
            errorMessage(exception.message);
        }
    }
    return(
        <section className="agency-body-content">
            <header><h1> ارسال پیام کوتاه به تمامی مشتریان </h1></header>
                <Container className="account-information mr-2" style={{maxWidth:"500px"}}>
                    <Form key={'s'} onSubmit={handleSubmits(handleSendGroupSms)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>متن پیام کوتاه</Form.Label>
                                <Form.Control as="textarea" rows={3} 
                                    {...registers('message',{...condition.message, value: ''})} />
                                {errorss.message && checkError(errorss.message.type, "متن پیام کوتاه", condition.message)}
                            </Form.Group>
                        </Row>
                        <Row>
                            <Button variant="warning" className="mx-auto" type="submit" >ارسال به مشتریان</Button>
                        </Row>
                    </Form>
                </Container>    
        </section> 
    )
}

export default GroupSms;