import { Table} from 'react-bootstrap'
import Reserve from "./Reserve";

const Reserves = () =>{
    

    return(
        <>
            <Table className="table mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>تاریخ </th>
                        <th>ساعت</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        customers.map((item, index) => (
                            <Customer key={index} cutomerInfo={item} setModal={handleShow} />
                        ))
                    } */}
                    <Reserve />
                </tbody>
            </Table>
        </>
    )
}

export default Reserves;