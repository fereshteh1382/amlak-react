import EstateContext from "../../../context/EstateContext";
import EstateManagement from "./EstateManagement";
import EstatesWrapper from "./EstatesWrapper";

const EstateLayout = ({mode}) =>{
    return(
        <EstateContext>
        <>
            {mode === 'show' ? <EstatesWrapper /> : <EstateManagement />}
        </>    
        </EstateContext>
    )
}

export default EstateLayout;