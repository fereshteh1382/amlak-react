import http from "./httpService";
import config from "./config.json";


export const registerUserApi = user => {
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


export const getAllCustomers = user => {
    return http.get(`${config.localapi}/customers/all-customers/${user}`);
};

export const DeleteCustomers = customerId => {
    return http.get(`${config.localapi}/customers/delete-customers/${customerId}`);
};

export const EditCustomers = customerId => {
    return http.get(`${config.localapi}/customers/edit-customers/${customerId}`);
};

export const RezervCustomers = customer => {
    return http.post(
        `${config.localapi}/customers/add-rezerv`,
        JSON.stringify(customer)
    );
};

/*export const SendSmsCustomers = customernubmers => {
    return http.post(
        `${config.localapi}/customers/sms-customers/${customernubmers}`,
        JSON.stringify(customer)
    );
};
*/

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
