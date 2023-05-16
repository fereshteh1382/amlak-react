import Footer from "../components/home/Footer";
import Nav from "../components/home/Nav";

const Home = () =>{
    return(

        <>
            <Nav />
            <section className="home-content">

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 ">
                            <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
                                    <div className="overlay"></div>
                                </a>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3><a href="#">باغ ویلا 800متری طرقبه</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                <span> 12,0000,000,000</span>
                                                <span> تومان</span>
                                            </p>
                                        </div>
                                    </div>
                                    {/* <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">
                                            <a href="#"
                                            className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                                <span><i className="ion-ios-menu"></i></span>
                                            </a>
                                            <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                <span><i className="ion-ios-cart"></i></span>
                                            </a>
                                            <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                                <span><i className="ion-ios-heart"></i></span>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 ">
                            <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
                                    <div className="overlay"></div>
                                </a>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3><a href="#">باغ ویلا 800متری طرقبه</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                <span> 12,0000,000,000</span>
                                                <span> تومان</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-6 col-lg-3 ">
                            <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
                                    <div className="overlay"></div>
                                </a>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3><a href="#">باغ ویلا 800متری طرقبه</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                <span> 12,0000,000,000</span>
                                                <span> تومان</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-6 col-lg-3 ">
                            <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
                                    <div className="overlay"></div>
                                </a>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3><a href="#">باغ ویلا 800متری طرقبه</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                <span> 12,0000,000,000</span>
                                                <span> تومان</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-6 col-lg-3 ">
                            <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
                                    <div className="overlay"></div>
                                </a>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3><a href="#">باغ ویلا 800متری طرقبه</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                <span> 12,0000,000,000</span>
                                                <span> تومان</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-6 col-lg-3 ">
                            <div className="product">
                                <a href="#" className="img-prod"><img className="img-fluid" src="/pics/product.jpg" alt="melk" />
                                    <div className="overlay"></div>
                                </a>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3><a href="#">باغ ویلا 800متری طرقبه</a></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                <span> 12,0000,000,000</span>
                                                <span> تومان</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                                  
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>

    )
}

export default Home;