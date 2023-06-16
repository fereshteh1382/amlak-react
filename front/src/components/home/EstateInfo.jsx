const EstateInfo = ({propEstate}) =>{
    console.log("ss")
    return(
        <section className="estate-detail-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-lg-6 mb-5 ftco-animate text-center">
                    <img className="img-fluid" src="/pics/product.jpg" alt="title" />
    			</div>
    			<div className="col-lg-6 product-details pl-md-5 ftco-animate" style={{maxWidth:"500px"}}>
    				<h1 className="estate-detail-header">منزل اجاره ای</h1>
                    <div className="rating d-flex m-2">
                        <p className="estate-detail-city">شهر محدوده</p>
					</div>
    				<div className="mx-auto d-flex row my-3" style={{width:"340px"}}>
                        <div className="width-80 estate-detail-grid text-center">
                            <span className="estate-detail-grid-title">متراژ</span>
                            <br/>
                            <span>270</span>
                        </div>
                        <div className="width-80 estate-detail-grid text-center">
                            <span className="estate-detail-grid-title">ساخت</span>
                            <br/>
                            <span>270</span>
                        </div>
                        <div className="width-80 estate-detail-grid text-center">
                            <span className="estate-detail-grid-title">طبقه</span>
                            <br/>
                            <span>270</span>
                        </div>
                        <div className="width-80 text-center">
                            <span className="estate-detail-grid-title">اتاق</span>
                            <br/>
                            <span>270</span>
                        </div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">قیمت</div>
                        <div className="col-md-6 text-left estate-detail-value"></div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">آسانسور</div>
                        <div className="col-md-6 text-left estate-detail-value"></div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">پارکینگ</div>
                        <div className="col-md-6 text-left estate-detail-value">ندارد</div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">انباری</div>
                        <div className="col-md-6 text-left estate-detail-value">ندارد</div>
                    </div>
    			</div>
    		</div>
    	</div>
    </section>
    )
};

export default EstateInfo;