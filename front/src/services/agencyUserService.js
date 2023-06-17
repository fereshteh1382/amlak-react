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

/*********************** */

export const AddRealty = realty => {
    return http.post(
        `${config.localapi}/realty/add-realty`,
        JSON.stringify(realty)
    );
};

export const getAllPublicRealty = realty => {
    return http.get(`${config.localapi}/realty/all-publicrealty`);
};

export const getAllUserRealty = realty => {
    return http.get(`${config.localapi}/realty/all-userrealty/${user}`);
};
/***************** */
export const handleProfile = user => {
    return http.post(
        `${config.localapi}/users/handleProfile/${userId}`,
        JSON.stringify(user)
    );
};
/*********************** */
export const handleSingleRealty = realty => {
    return http.post(
        `${config.localapi}/realty/single-realty/${realtyId}`);
};
/*********************** */
export const getSingleUser = userId => {
    return http.get(`${config.localapi}/users/single-user/${userId}`);
};
/************************ */
export const EditRealty = realtyId => {
    return http.post(`${config.localapi}/customers/edit-realty/${realtyId}`);
};
/***************************** */
export const TokenUser = mobile => {
    return http.get(`${config.localapi}/customers/token-user/${mobile}`);
};
/**************************** */
export const getAllUsersFront = user => {
    return http.get(`${config.localapi}/users/allusersfront`);
};
/******************************** */
/*export const RegisterImage = img => {
    return http.post(
        `${config.localapi}/customersfile/image-upload`,
        JSON.stringify(img)
    );
};*/
