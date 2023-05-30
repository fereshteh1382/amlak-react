import { useSelector } from "react-redux";
import Estate from "./Estate";

const Estates = () =>{
    const AllEstates = useSelector(state => state.publicEstates);

    return (
        <section className="home-content">
            <div className="container">
                <div className="row">
                    {
                        AllEstates.map((item, index) => (
                            <Estate key={index} propEstate={item}  />
                        ))
                    }
                                
                </div>
            </div>
        </section>
    )
}

export default Estates;