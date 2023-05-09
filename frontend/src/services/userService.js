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

export const loginUser = user => {
    return http.post(`${config.localapi}/users/handleLogin`, JSON.stringify(user));
};
export const getadminUrl = () => {
    return http.get(`${config.localapi}/users/login`);
};

