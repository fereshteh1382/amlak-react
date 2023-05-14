import http from "./httpService";

import config from "./config.json";

export const registerUser = user => {
    return http.post(
        `${config.localapi}/users/handleRegister`,
        JSON.stringify(user)
    );
};

export const loginUser = user => {
    return http.post(`${config.localapi}/users/handleLogin`, JSON.stringify(user));
};

export const RegisterCustomers = customer => {
    return http.post(
        `${config.localapi}/customers/add-customers`,
        JSON.stringify(customer)
    );
};

export const getAllCustomers = () => {
    return http.get(`${config.localapi}/customers/all-customers`);
};

export const DeleteCustomers = customerId => {
    return http.get(`${config.localapi}/customers/delete-customers/${customerId}`);
};

export const EditCustomers = customerId => {
    return http.get(`${config.localapi}/customers/edit-customers/${customerId}`);
};

export const RegisterCustomersFile = customerfile => {
    return http.post(
        `${config.localapi}/customersfile/add-customersfile`,
        JSON.stringify(customerfile)
    );
};

export const RegisterImage = img => {
    return http.post(
        `${config.localapi}/customersfile/image-upload`,
        JSON.stringify(img)
    );
};