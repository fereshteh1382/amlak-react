import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Amlak from "./Amlak";
import {store} from "../redux-stores";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Amlak />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
