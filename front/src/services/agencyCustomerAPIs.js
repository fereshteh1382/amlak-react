import http from "./httpService";
import config from "./config.json";

export const customerRegisterApi = (customer) => {
    return http.post(
        `${config.localapi}/customers/add-customers`,
        JSON.stringify(customer)
    );
};

export const getAllCustomersApi = userId => {
    return http.get(`${config.localapi}/customers/all-customers/${userId}`);
};

export const getNewCustomersApi = userId => {
    return http.get(`${config.localapi}/customers/all-customers/${userId}`);
};

export const DeleteCustomerApi = customerId => {
    return http.get(`${config.localapi}/customers/delete-customers/${customerId}`);
};

export const EditCustomerApi = customerInfo => {
    return http.post(`${config.localapi}/customers/edit-customers/${customerInfo.id}`, JSON.stringify(customerInfo));
};

export const RezervDateForCustomerApi = customer => {
    return http.post(
        `${config.localapi}/customers/add-rezerv`,
        JSON.stringify(customer)
    );
};

/*export const SendSmsToCustomerApi = smsInfo => {
    return http.post(
        `${config.localapi}/customers/sms-customers/${smsInfo.customernubmers}`,
        JSON.stringify(smsInfo.message)
    );
};*/
export const SendSmsToCustomerApi = smsInfo => {
    return http.get(
        `${config.localapi}/customers/sms-customers/${smsInfo.userId}/${smsInfo.customernumbers}/${smsInfo.message}`,
    );
};

export const SingleCustomerApi = customerId => {
    return http.get(`${config.localapi}/customers/single-customer/${customerId}`);
};

export const SearchCustomer = customername => {
    return http.get(`${config.localapi}/customers/search-customer/${userId}/${customername}`);
};
