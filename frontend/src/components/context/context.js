import { createContext } from "react";

export const context = createContext({
    fullname: "",
    setFullname: () => { },
    mobile: "",
    setMobile: () => { },
    password: "",
    setPassword: () => { },
    confirmPassword: "",
    setConfirmPassword: () => { },
    //policy: "",
    // setPolicy: () => {},
    validator: null,
    handleLogin: () => { },
    handleRegister: () => { },
    handleRegisterCustomers: () => { }
});
