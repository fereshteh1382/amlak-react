import { useContext } from "react";
import { Link } from "react-router-dom";
import { EstateStateContext } from "../../../context/EstateStateContext";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { existAdmin } from "../../../utils/TokenManagement";

const Estate = ({ EstateInfo }) => {
    const esContext = useContext(EstateStateContext);
    const { SetEsatetByID, changeEstateStatus } = esContext;


    return (
            <div className="col-md-5 card m-2 card-landscape" style={{maxWidth: "1000px"}}>
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <div className=" card-image-container m-auto">
                            <img className="card-img py-2" src="/pics/product.jpg" alt={EstateInfo.title} />
                        </div>
                    </div>
                    <div className="col-sm-7 text-center">
                        <div className="card-body">
                            <h5 className="card-title">{EstateInfo.title}</h5>
                            <p className="card-text">وضعیت:{existAdmin() ? "" : (EstateInfo.status === 'public' ? 'عمومی' : 'شخصی')}</p>
                            {existAdmin() ? 
                                <BootstrapSwitchButton checked={EstateInfo.status == 'public'}
                                onChange={()=>changeEstateStatus(EstateInfo._id, EstateInfo.status)}  
                                size="xs" onlabel="عمومی"  onstyle="success"  width={80} height={30}
                                offlabel="شخصی" offstyle="danger"  />    
                                :  ""
                            }
                            
                            <Link className="btn btn-warning font-12 m-3" 
                                onClick={()=>SetEsatetByID(EstateInfo._id)}
                                to={`/agency/estates/${EstateInfo._id}`} >مدیریت ملک</Link>
                               
                            
                        </div>
                    </div>
                </div>
            </div>
        // <Col md={6} lg={3}>
        //     <Container className="product">
        //         <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
        //             <div className="overlay"></div>
        //         </a>
        //         <Container className="text py-3 pb-4 px-3 text-center">
                    
        //             <Link to={`/agency/estates/${1}`} >
        //                 <h3 className="text-dark text-center">
        //                     {EstateInfo.title}
        //                     <br/>
        //                     {EstateInfo.status == 'public' ? 'عمومی' : 'شخصی'}
        //                     </h3>
        //             </Link>    
                    
        //             {/* <div className="bottom-area d-flex px-3">
        //                 <div className="m-auto d-flex">
        //                     <a href="#"
        //                     className="add-to-cart d-flex justify-content-center align-items-center text-center">
        //                         <span><i className="ion-ios-menu"></i></span>
        //                     </a>
        //                     <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
        //                         <span><i className="ion-ios-cart"></i></span>
        //                     </a>
        //                     <a href="#" className="heart d-flex justify-content-center align-items-center ">
        //                         <span><i className="ion-ios-heart"></i></span>
        //                     </a>
        //                 </div>
        //             </div> */}
        //         </Container>
        //     </Container>
        // </Col>

    )
}

export default Estate;