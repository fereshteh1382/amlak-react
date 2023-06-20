import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { AdminStateContext } from "../../../context/AdminStateContext";
import Agency from "./Agency";

const Main = () =>{
    const acontext = useContext(AdminStateContext);
    const {allAgencyInfo} = acontext;
    return(
            <Container className="table-responsive-sm mx-auto mt-5" style={{maxWidth:"700px"}}>
                <h1 className="text-center">لیست مشاورین املاک</h1>
                <Table striped bordered hover responsive className="table mt-3">
                    <thead>
                        <tr className="bg-warning">
                            <th scope="col">نام</th>
                            <th scope="col">نام بنگاه</th>
                            <th scope="col">تلفن</th>
                            <th scope="col">لاگین</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allAgencyInfo.length >0 ? <Agency /> : <tr><td colSpan={4}>رکوردی یافت نشد</td></tr>
                        }
                    </tbody>
                </Table>
            </Container>
        
    )
}

export default Main;