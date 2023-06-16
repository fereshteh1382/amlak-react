import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () =>{
    return(
        <div className="container mt-5 mx-auto" style={{maxWidth:"1000px"}}>
            <div className="row">
                <div className="col-md-4 col-xl-3">
                    <div className="card bg-c-blue dashboard-card">
                        <div className="card-dashboard-block text-light">
                            <h6 className="m-b-20">
                                <FontAwesomeIcon icon={faUser} /> { }
                                تعداد کاربران</h6>
                            <h2 className="text-center mt-2"><span>4</span></h2>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Dashboard;


