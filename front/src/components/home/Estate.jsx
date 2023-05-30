const Estate = ({propEstate}) =>{
    return(
        <div className="col-md-6 col-lg-3 ">
            <div className="product">
                <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
                    <div className="overlay"></div>
                </a>
                <div className="text py-3 pb-4 px-3 text-center">
                    <h3><a href="#">{propEstate.title}</a></h3>
                    <div className="d-flex">
                        <div className="mx-auto">
                            <p className="price">
                                <span> {propEstate.price}</span>
                                <span> تومان</span>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Estate;