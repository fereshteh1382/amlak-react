import { useContext, useEffect } from "react";
import {useForm} from 'react-hook-form';
import { checkError } from "../../../utils/FormValidator";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { EstateStateContext } from "../../../context/EstateStateContext";
import { Col, Form, Row } from "react-bootstrap";
import OptionSelect from "../../main/optionSelect";

const EstateForm = () =>{
    const urlParams = useParams();
    const navigate = useNavigate();
    const esContext = useContext(EstateStateContext);
    const {condition, handleEstateInsert,allCustomers, estate, statusOptions, YesNoOptions } = esContext;
    const { register, handleSubmit, formState:{errors} } = useForm();
    
    useEffect(()=>{
        if(urlParams.estateid && !isEmpty(urlParams.estateid) && isEmpty(estate)){
            navigate('/agency/estates', { replace: true });
        }
    }, [estate, urlParams, navigate]);

    // const ClassName = {
    //     form: `my-4 mx-auto ${loadingFields.loading ? "background-blur disabled":""}`,
    //     registerBtn:`btn btn-warning ${loadingFields.loading ? "disabled": ""}`,
    // };
    return(
        <section className="agency-body-content">
            <header className="text-light text-center">
                <h1>ثبت اطلاعات ملک </h1>
            </header>
            <div className="inner">
                <div className="account-information">
                    <Form /*className={ClassName.form} */ onSubmit={handleSubmit(handleEstateInsert)} >
                        <Form.Control type="hidden" />

                        
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">مشتری</Form.Label>
                            <Col md={5}>
                                <Form.Select
                                    className="form-control" 
                                    {...register("customer", { ...condition.customer, value: estate.customer})}
                                >
                                    <OptionSelect Options={allCustomers} />
                                </Form.Select>
                                {errors.customer && checkError(errors.customer.type,"مشتری",condition.customer)}
                            </Col>
                        </Form.Group>       
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2"> دسته بندی</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="دسته بندی" 
                                    {...register('category',{...condition.category, value: estate.category})} />
                                    {errors.category && checkError(errors.category.type,"دسته بندی",condition.category)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">شهر</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="شهر" 
                                    {...register('city',{...condition.city, value: estate.city})} />
                                    {errors.city && checkError(errors.city.type,"شهر",condition.city)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">محدوده</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="محدوده" 
                                    {...register('range',{...condition.range, value: estate.range})} />
                                    {errors.range && checkError(errors.range.type,"محدوده",condition.range)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">عنوان</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="عنوان" 
                                    {...register('title',{...condition.title, value: estate.title})} />
                                    {errors.title && checkError(errors.title.type,"عنوان",condition.title)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">متراژ</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="متراژ" 
                                    {...register('meterage',{...condition.meterage, value: estate.meterage})} />
                                    {errors.meterage && checkError(errors.meterage.type,"متراژ",condition.meterage)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">قیمت</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="قیمت" 
                                    {...register('price',{...condition.price, value: estate.price})} />
                                    {errors.price && checkError(errors.price.type,"عنوان",condition.price)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">تعداد اتاق</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="تعداد اتاق" 
                                    {...register('rooms',{...condition.rooms, value: estate.rooms})} />
                                    {errors.rooms && checkError(errors.rooms.type,"تعداد اتاق",condition.rooms)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">سال ساخت</Form.Label>
                            <Col md={5}>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="سال ساخت" 
                                    {...register('yearconstruction',{...condition.yearconstruction, value: estate.yearconstruction})} />
                                    {errors.yearconstruction && checkError(errors.yearconstruction.type,"سال ساخت",condition.yearconstruction)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="fullname" className="col-md-2">طبقه</Form.Label>
                            <Col md={5}>
                                <Form.Control
                                    type="text" 
                                    className="form-control" 
                                    placeholder="طبقه" 
                                    {...register('floor',{...condition.floor, value: estate.floor})} />
                                    {errors.floor && checkError(errors.floor.type,"طبقه",condition.floor)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="elevator" className="col-md-2">آسانسور</Form.Label>
                            <Col md={5}>
                                <Form.Select
                                    className="form-control" 
                                    {...register("elevator", { ...condition.elevator, value: estate.elevator})}
                                >
                                    <OptionSelect Options={YesNoOptions} />
                                </Form.Select>
                                {errors.customer && checkError(errors.elevator.type,"آسانسور",condition.elevator)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="parking" className="col-md-2">پارکینگ</Form.Label>
                            <Col md={5}>
                                <Form.Select
                                    className="form-control" 
                                    {...register("parking", { ...condition.parking, value: estate.parking})}
                                >
                                    <OptionSelect Options={YesNoOptions} />
                                </Form.Select>
                                {errors.customer && checkError(errors.parking.type,"پارکینگ",condition.parking)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="warehouse" className="col-md-2">انباری</Form.Label>
                            <Col md={5}>
                                <Form.Select
                                    className="form-control" 
                                    {...register("warehouse", { ...condition.warehouse, value: estate.warehouse})}
                                >
                                    <OptionSelect Options={YesNoOptions} />
                                </Form.Select>
                                {errors.customer && checkError(errors.customer.type,"انباری",condition.customer)}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label htmlFor="status" className="col-md-2">نوع نمایش</Form.Label>
                            <Col md={5}>
                                <Form.Select
                                    className="form-control" 
                                    {...register("status", { ...condition.status, value: estate.status})}
                                >
                                    <OptionSelect Options={statusOptions} />
                                </Form.Select>
                                {errors.status && checkError(errors.status.type,"نوع نمایش",condition.status)}
                            </Col>    
                        </Form.Group>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning" >ذخیره اطلاعات</button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}
//, , , , , images, , , , , , , , address, desc,
export default EstateForm;