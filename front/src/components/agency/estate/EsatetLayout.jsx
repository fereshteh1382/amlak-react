import CustomerContext from "../../../context/CustomerContext";
import EstateContext from "../../../context/EstateContext";
import EstateManagement from "./EstateManagement";
import EstatesWrapper from "./EstatesWrapper";

const EstateLayout = ({mode}) =>{
    return(
        <CustomerContext>
            <EstateContext>
                {mode === 'show' ? <EstatesWrapper /> : <EstateManagement />}
            </EstateContext>
        </CustomerContext>
    )
}

export default EstateLayout;