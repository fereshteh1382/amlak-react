import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom"
import AgencySidebar from "./Sidebar";

const Body = ({typeView}) => {
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <main id="home-page" className="p-5">
                <Container fluid="xxl m-auto">
                    <div className="agency-body">
                        <div className="row">
                            {
                                (pathName === '/agency/login' || pathName === '/agency/register') ? 
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <Outlet />
                                </div> :
                                
                                    typeView === 'mobile' ? 
                                        <div className="col-md-10 col-sm-10 col-xs-12">
                                            <Outlet />
                                        </div> :
                                        <>
                                            <div className="col-md-3 col-sm-4 col-xs-12">
                                                <AgencySidebar />
                                            </div>
                                            <div className="col-md-9 col-sm-8 col-xs-12">
                                                <Outlet />
                                            </div>
                                        </>
                            }
                        </div>
                    </div> 
                </Container>
            </main>
    )
}

export default Body;