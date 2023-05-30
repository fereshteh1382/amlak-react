import http from "./httpService";
import config from "./config.json";


export const getAllEstateApi = userId => {
    return http.get(`${config.localapi}/realty/all-userrealty/${userId}`);
};

export const AddEstateApi = realty => {
    return http.post(
        `${config.localapi}/realty/add-realty`,
        JSON.stringify(realty)
    );
};

export const getAllPublicEstateApi = realty => {
    return http.get(`${config.localapi}/realty/all-publicrealty`);
};




