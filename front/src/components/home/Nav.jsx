import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light mb-5" id="ftco-navbar">
            <div className="container">
                <Link to="/" className="navbar-brand" >املاک</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> منو
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >منو1</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/" className="nav-link" >منو2</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/agency/login" ><button className="btn btn-warning text-light">همکاری با مشاور املاک</button> </Link>   
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;