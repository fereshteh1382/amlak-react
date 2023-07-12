import { useContext } from "react";
import { HomeStateContext } from "../../context/HomeStateContext";

const Estate = ({propEstate}) =>{
    const hssContext = useContext(HomeStateContext);
    const { showSelectedEstate  } = hssContext;
    return(
        <div className="col-md-6 col-lg-3 " style={{cursor:"pointer"}} onClick={()=>{showSelectedEstate(propEstate._id)}}>
            <div className="product text-center">
               <img className="img-fluid" src="/pics/product.jpg" alt={propEstate.title} />
                    <div className="overlay"></div>
                <div className="text py-3 pb-2 px-3">
                    <h3><a href="#">{propEstate.title}</a></h3>
                    <div className="d-flex">
                        <div className="mx-auto">
                            <p className="price">
                                <span> {propEstate.price}</span>
                                <span> تومان</span>
                            </p>
                        </div>

                    </div>
                    <div>
                        <p style={{color:"#717577"}}>
                            <span> {propEstate.user.fullname}</span>
                            <span className="m-2"> {propEstate.user.mobile}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Estate;