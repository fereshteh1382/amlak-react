import http from "./httpService";

import config from "./config.json";

/*export const getCourses = () => {
    return http.get(`${config.localapi}/posts/allposts_json`);
};*/
export const registerUser = user => {
    return http.post(
        `${config.localapi}/users/handleRegister`,
        JSON.stringify(user)
    );
};

export const loginUserApi = user => {
    return http.post(`${config.localapi}/users/handleLogin`, JSON.stringify(user));
};

export const RegisterCustomers = customer => {
    return http.post(
        `${config.localapi}/customers/handleRegisterCustomers`,
        JSON.stringify(customer)
    );
};
