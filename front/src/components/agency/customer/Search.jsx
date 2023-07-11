import { useContext } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import { CustomerStateContext } from "../../../context/CustomerStateContext";


const Search = () =>{
    const csContext = useContext(CustomerStateContext);
    const {SearchCustomer } = csContext;
    const { register, handleSubmit, formState:{errors}, setValue } = useForm();
    return(

        <Form onSubmit={handleSubmit(SearchCustomer)}>
            
            <Alert variant="info">
                درجدول زیر، اطلاعات ده مشتری که اخیرا ثبت گردیده، نمایش داده شده است.
                <br/>
                در صورت نیاز به مشاهده/ویرایش اطلاعات مشتریان قدیمی تر، می توانید با استفاده از فرم زیر 
                اطلاعات مشتری را جستجو کنید تا در جدول نمایش یابد.
            </Alert>
            <Form.Control type="text" className="col-md-5 d-inline ml-1" {...register('name')}  />
            <Button className="btn btn-warning my-2" type="submit">جستجو مشتری</Button>
        </Form>
 
    )
}

export default Search;