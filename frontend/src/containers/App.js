import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Amlak from "./Amlak";
import { ToastContainer } from "react-toastify";

const App = () => {
    useEffect(() => {
        require("../utils/script");
    }, []);

    return (
        <BrowserRouter>
            <Amlak />
            <ToastContainer />
        </BrowserRouter>
    );
};

export default App;
