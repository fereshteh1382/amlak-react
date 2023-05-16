import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () =>{
    return(
        
        <footer className="home-footer">
            <div className="container">
                <div className="row">
                    <div className="mouse">
                        <a href="#" className="mouse-icon">
                            <div className="mouse-wheel">
                                <FontAwesomeIcon icon={faArrowUp} /></div>
                        </a>
                    </div>
                </div>
                <div className="row my-3 text-center">
                    <div className="col-md">
                        <div className="home-footer-widget mb-4">
                            <p>فعاليت‌های اين سايت تابع قوانين و مقررات جمهوری اسلامی ايران است </p>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;