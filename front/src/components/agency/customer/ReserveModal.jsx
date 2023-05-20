import { Button, Modal } from "react-bootstrap";
import ReserveForm from "./ReserveForm";
import Reserves from "./Reserves";

const ReserveModal = ({show, list, handleClose}) =>{
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="text-info">
                {
                    list === "list" ? "مشاهده وقت های رزروشده " : "رزرو وقت"
                }
            </Modal.Header>
            <Modal.Body>
                {
                    list === "list" ? <Reserves/> : <ReserveForm />
                }
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                بستن
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReserveModal;