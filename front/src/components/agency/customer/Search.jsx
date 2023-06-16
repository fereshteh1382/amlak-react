import { Alert, Button, Form } from "react-bootstrap";

const Search = () =>{
    return(

        <Form>
            
            <Alert variant="info">
                درجدول زیر، اطلاعات ده مشتری که اخیرا ثبت گردیده، نمایش داده شده است.
                <br/>
                در صورت نیاز به مشاهده/ویرایش اطلاعات مشتریان قدیمی تر، می توانید با استفاده از فرم زیر 
                اطلاعات مشتری را جستجو کنید تا در جدول نمایش یابد.
            </Alert>
            <Form.Control type="text" className="col-md-5 d-inline ml-1" />
            <Button className="btn btn-warning my-2">جستجو مشتری</Button>
        </Form>

    )
}

export default Search;