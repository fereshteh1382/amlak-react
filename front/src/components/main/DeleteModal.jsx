import { Button, Modal } from "react-bootstrap";

const DeleteModal = ({show, handleAccept, handleClose}) =>{
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title className="text-danger">هشدار</Modal.Title>
            </Modal.Header>
            <Modal.Body>در صورت حذف، امکان بازگشت اطلاعات وجود ندارد. آیا از حذف اطلاعات اطمینان دارید؟</Modal.Body>
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

export default DeleteModal;