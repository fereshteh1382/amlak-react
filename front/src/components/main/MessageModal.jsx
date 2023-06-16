import { Button, Modal } from "react-bootstrap";

const MessageModal = ({message, show, handleAccept, handleClose}) =>{
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="text-danger">هشدار</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={handleAccept}>
                بله
            </Button>
            <Button variant="danger" onClick={handleClose}>
                انصراف
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MessageModal;