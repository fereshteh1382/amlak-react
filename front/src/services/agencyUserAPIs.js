import http from "./httpService";
import config from "./config.json";

/** use in admin panel */
export const getAllUsersFrontApi = user => {
    return http.get(`${config.localapi}/users/allusersfront`);
};

export const TokenUserApi = mobile => {
    return http.get(`${config.localapi}/users/token-user/${mobile}`);
};

export const ActiveUserApi = userId => {
    return http.get(`${config.localapi}/users/active-user/${userId}`);
};

export const DisActiveUserApi = userId => {
    return http.get(`${config.localapi}/users/disactive-user/${userId}`);
};

export const ChargedUserSmsPanelApi = (userId, smscount) => {
    return http.post(`${config.localapi}/users/addsms-post/${userId}/${smscount}`);
};


export const registerUserApi = user => {
    return http.post(
        `${config.localapi}/users/handleRegister`,
        JSON.stringify(user)
    );
};
export const EditProfileApi = user => {
    return http.post(
        `${config.localapi}/users/handleProfile/${user.userId}`,
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


export const SendSmsToAllCustomerApi = smsInfo => {
    return http.post(
        `${config.localapi}/customers/sms-allcustomers/${smsInfo.userId}/${JSON.stringify(smsInfo.message)}`
    );
};

export const RemainingSmsCountApi = user => {
    return http.post(`${config.localapi}/users/smscount`, JSON.stringify(user));
};

export const VerifyCodeApi = (mobile, verifycode) => {
    return http.get(`${config.localapi}/users/verifycode/${mobile}/${verifycode}`);
};
