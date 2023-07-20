import { useContext } from "react";
import { HomeStateContext } from "../../context/HomeStateContext";
import config from "../../services/config.json";

const EstateInfo = () =>{
    const hssContext = useContext(HomeStateContext);
    const { selectedEstateInfo  } = hssContext;
    const estatepic  = selectedEstateInfo.thumbnail1 ? `${config.localapi}/uploads/${selectedEstateInfo.thumbnail1}` : "/pics/product.jpg";


    return(
        <section className="estate-detail-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-lg-6 mb-5 ftco-animate text-center">
                    <img className="img-fluid" src={estatepic} alt="title" style="max-height:300px" />
    			</div>
    			<div className="col-lg-6 product-details pl-md-5 ftco-animate" style={{maxWidth:"500px"}}>
    				<h1 className="estate-detail-header">{selectedEstateInfo.title}</h1>
                    <div className="rating d-flex m-2">
                        <p className="estate-detail-city">{selectedEstateInfo.city} - {selectedEstateInfo.range}</p>
					</div>
    				<div className="mx-auto d-flex row my-3" style={{width:"340px"}}>
                        <div className="width-80 estate-detail-grid text-center">
                            <span className="estate-detail-grid-title">متراژ</span>
                            <br/>
                            <span>{selectedEstateInfo.meterage} متر </span>
                        </div>
                        <div className="width-80 estate-detail-grid text-center">
                            <span className="estate-detail-grid-title">ساخت</span>
                            <br/>
                            <span>{selectedEstateInfo.yearconstruction}</span>
                        </div>
                        <div className="width-80 estate-detail-grid text-center">
                            <span className="estate-detail-grid-title">طبقه</span>
                            <br/>
                            <span>{selectedEstateInfo.floor}</span>
                        </div>
                        <div className="width-80 text-center">
                            <span className="estate-detail-grid-title">اتاق</span>
                            <br/>
                            <span>{selectedEstateInfo.rooms}</span>
                        </div>
                    </div>
                    {/* <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">مشاور املاک</div>
                        <div className="col-md-6 text-left estate-detail-value">{selectedEstateInfo.user.fullname}</div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">موبایل</div>
                        <div className="col-md-6 text-left estate-detail-value">{selectedEstateInfo.user.mobile}</div>
                    </div> */}
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">قیمت</div>
                        <div className="col-md-6 text-left estate-detail-value">{selectedEstateInfo.price}</div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">آسانسور</div>
                        <div className="col-md-6 text-left estate-detail-value">{selectedEstateInfo.elevator == 'yes' ? "دارد" : "ندارد"}</div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">پارکینگ</div>
                        <div className="col-md-6 text-left estate-detail-value">{selectedEstateInfo.parking == 'yes' ? "دارد" : "ندارد"}</div>
                    </div>
                    <div className="row estate-detail-info">
                        <div className="col-md-6 estate-detail-title">انباری</div>
                        <div className="col-md-6 text-left estate-detail-value">{selectedEstateInfo.warehouse == 'yes' ? "دارد" : "ندارد"}</div>
                    </div>
    			</div>
    		</div>
    	</div>
    </section>
    )
};

export default EstateInfo;