import { useContext, useEffect, useState } from "react";
import {useForm} from 'react-hook-form';
import { checkError } from "../../../utils/FormValidator";
import { useNavigate, useParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { EstateStateContext } from "../../../context/EstateStateContext";
import { Col, Form, Row } from "react-bootstrap";
import OptionSelect from "../../main/optionSelect";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewCustomerModal from "../../main/NewCustomerModal";
import { CustomerStateContext } from "../../../context/CustomerStateContext";

const EstateForm = () =>{
    const urlParams = useParams();
    const navigate = useNavigate();


    const esContext = useContext(EstateStateContext);
    const {condition, handleEstateInsert, estate, handleMainfileChange, handleImage2fileChange, handleImage3fileChange, YesNoOptions, RoomsOptions, YearOptions, FloorOptions, mainFile, image2File, image3File} = esContext;

    const custContext = useContext(CustomerStateContext);
    const {newCustomerModalShow, handleNewCustomerModalClose, handleNewCustomerModalShow, allCustomers } = custContext;

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
        <>
            <section className="agency-body-content">
                <header className="text-light text-center">
                    <h1>ثبت اطلاعات ملک </h1>
                </header>
                <div className="inner">
                    <div className="account-information">
                        <Form key={1} onSubmit={handleSubmit(handleEstateInsert)} >
                            <Form.Control type="hidden"  {...register("_id", {value: estate._id})} />

                            
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="customer" className="col-md-2">مشتری</Form.Label>
                                <Col md={5}>
                                    <Form.Select
                                        className="form-control" 
                                        {...register("customer", { ...condition.customer, value: estate.customer})}
                                    >
                                        <OptionSelect Options={allCustomers} />
                                    </Form.Select>
                                    {errors.customer && checkError(errors.customer.type,"مشتری",condition.customer)}
                                </Col>
                                <Col md={1}>
                                    <FontAwesomeIcon icon={faUserPlus} style={{ cursor: "pointer", fontSize:"25px" }}
                                        title="درصورتی که مشتری در لیست نمی باشد میتوانید از این بخش استفاده کنید"
                                        className="pl-1 text-success" onClick={() => { handleNewCustomerModalShow() }} />
                                </Col>
                            </Form.Group>  
                            <Form.Control type="hidden"  {...register('category',{...condition.category, value: "all"})} />
                                 
                            {/* <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="category" className="col-md-2"> دسته بندی</Form.Label>
                                <Col md={5}>
                                    <Form.Control
                                        type="text" 
                                        className="form-control" 
                                        placeholder="دسته بندی" 
                                        {...register('category',{...condition.category, value: estate.category})} />
                                        {errors.category && checkError(errors.category.type,"دسته بندی",condition.category)}
                                </Col>
                            </Form.Group> */}
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="city" className="col-md-2">شهر</Form.Label>
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
                                <Form.Label htmlFor="range" className="col-md-2">محدوده</Form.Label>
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
                                <Form.Label htmlFor="title" className="col-md-2">عنوان</Form.Label>
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
                                <Form.Label htmlFor="meterage" className="col-md-2">متراژ</Form.Label>
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
                                <Form.Label htmlFor="price" className="col-md-2">قیمت</Form.Label>
                                <Col md={5}>
                                    <Form.Control
                                        type="text" 
                                        className="form-control" 
                                        placeholder="قیمت" 
                                        {...register('price',{...condition.price, value: estate.price})} />
                                        {errors.price && checkError(errors.price.type,"قیمت",condition.price)}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="rooms" className="col-md-2">تعداد اتاق</Form.Label>
                                <Col md={2}>
                                    <Form.Select
                                        className="form-control" 
                                        {...register("rooms", { ...condition.rooms, value: estate.rooms})}
                                    >
                                        <OptionSelect Options={RoomsOptions} />
                                    </Form.Select>
                                    {errors.rooms && checkError(errors.rooms.type,"تعداد اتاق",condition.rooms)}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="yearconstruction" className="col-md-2">سال ساخت</Form.Label>
                                <Col md={2}>
                                    <Form.Select
                                        className="form-control" 
                                        {...register("yearconstruction", { ...condition.yearconstruction, value: estate.yearconstruction})}
                                    >
                                        <OptionSelect Options={YearOptions} />
                                    </Form.Select>
                                    {errors.yearconstruction && checkError(errors.yearconstruction.type,"سال ساخت",condition.yearconstruction)}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="floor" className="col-md-2">طبقه</Form.Label>
                                <Col md={2}>
                                    <Form.Select
                                        className="form-control" 
                                        {...register("floor", { ...condition.floor, value: estate.floor})}
                                    >
                                        <OptionSelect Options={FloorOptions} />
                                    </Form.Select>
                                    {errors.floor && checkError(errors.floor.type,"طبقه",condition.floor)}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="elevator" className="col-md-2">آسانسور</Form.Label>
                                <Col md={2}>
                                    <Form.Select
                                        className="form-control" 
                                        {...register("elevator", { ...condition.elevator, value: estate.elevator})}
                                    >
                                        <OptionSelect Options={YesNoOptions} />
                                    </Form.Select>
                                    {errors.elevator && checkError(errors.elevator.type,"آسانسور",condition.elevator)}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="parking" className="col-md-2">پارکینگ</Form.Label>
                                <Col md={2}>
                                    <Form.Select
                                        className="form-control" 
                                        {...register("parking", { ...condition.parking, value: estate.parking})}
                                    >
                                        <OptionSelect Options={YesNoOptions} />
                                    </Form.Select>
                                    {errors.parking && checkError(errors.parking.type,"پارکینگ",condition.parking)}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="warehouse" className="col-md-2">انباری</Form.Label>
                                <Col md={2}>
                                    <Form.Select
                                        className="form-control" 
                                        {...register("warehouse", { ...condition.warehouse, value: estate.warehouse})}
                                    >
                                        <OptionSelect Options={YesNoOptions} />
                                    </Form.Select>
                                    {errors.warehouse && checkError(errors.warehouse.type,"انباری",condition.warehouse)}
                                </Col>
                            </Form.Group>
                            {/* <Form.Group as={Row} className="mb-3">
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
                            </Form.Group> */}
                             <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="" className="col-md-2">تصویر اصلی</Form.Label>
                                <Col md={4}>
                                        <Form.Control type="file" name={mainFile.fileValue} onChange={handleMainfileChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="" className="col-md-2">تصویر دوم</Form.Label>
                                <Col md={4}>
                                        <Form.Control type="file" name={image2File.fileValue} onChange={handleImage2fileChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label htmlFor="" className="col-md-2">تصویر سوم</Form.Label>
                                <Col md={4}>
                                        <Form.Control type="file" name={image3File.fileValue} onChange={handleImage3fileChange}/>
                                </Col>
                            </Form.Group>
                            {/* <Form.Group as={Row} className="mb-3">
                                <Col md={2}>
                                    <InputFileByIcon
                                        nameFile= {mainFile.fileName}
                                        inputName={mainFile.fileValue}
                                        fileAccept=".jpg"
                                        onChangeFile={handlefileChange}
                                        inputLabel= " آپلود تصویر اصلی" /> */}
                            
                            {/* {(getValues("HasAttach") *1 === 1 && jobFile.deletedFile==="0") &&
                                    <>
                                        <FontAwesomeIcon role="button" className="text-custom-blue" icon={faFileDownload} onClick={e=>downloadAttachedFile()}/> 
                                        <FontAwesomeIcon role="button" title="remove file" className="text-danger ms-2" icon={faTimesCircle} onClick={e => removeAttachedFile()} />
                                    </> 
                                }  */}
                                    {/* {errors.warehouse && checkError(errors.warehouse.type,"انباری",condition.warehouse)} */}
                                {/* </Col>
                            </Form.Group> */}
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning" >ذخیره اطلاعات</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
            <NewCustomerModal show={newCustomerModalShow} handleClose={handleNewCustomerModalClose} />
        </>
    )
}
//, , , , , images, , , , , , , , address, desc,
export default EstateForm;