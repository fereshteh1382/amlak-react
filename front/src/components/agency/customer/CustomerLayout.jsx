import CustomerContext from "../../../context/CustomerContext";
import CustomerManagement from "./CustomerManagement";
import CustomersWrapper from "./CustomersWrapper";

const CustomerLayout = ({mode}) =>{
    return(
        <CustomerContext>
            {mode === 'show' ? <CustomersWrapper /> : <CustomerManagement />}
            
        </CustomerContext>
    )
}

export default CustomerLayout;