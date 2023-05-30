import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Nav from "../components/home/Nav";
import { getAllPublicEstate } from "../redux-actions/estate";
import Estates from "../components/home/Estates";

const Home = () =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPublicEstate());
    }, []);
    

    return(

        <>
            <Nav />
            <Estates />

            {/* <Footer /> */}
        </>

    )
}

export default Home;