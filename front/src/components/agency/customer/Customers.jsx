import Customer from "./Customer";
import {Button, Table} from 'react-bootstrap'
const Customers = ({customers}) =>{
    return(
        <Table className="table mt-4">
            <thead className="thead-dark">
                <tr>
                    <th>نام </th>
                    <th>تلفن</th>
                    <th>آدرس</th>
                    <th>توضیحات</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map((item, index) => (
                        <Customer key={index} cutomerInfo={item}/>
                    ))
                }
            </tbody>
        </Table>
    
    )
}

export default Customers;