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

export const EditEstateApi = realty => {
    return http.post(`${config.localapi}/realty/edit-realty/${realty._id}`, JSON.stringify(realty));
};

export const getAllPublicEstateApi = realty => {
    return http.get(`${config.localapi}/realty/all-publicrealty`);
};

export const getEstateInfoApi = realtyId => {
    return http.post(
        `${config.localapi}/realty/single-realty/${realtyId}`);
};
/** */
export const SetPublicEstateApi = realtyId => {
    return http.get(`${config.localapi}/realty/confirmrealty/${realtyId}`);
};

export const SetPrivateStateApi = realtyId => {
    return http.get(`${config.localapi}/realty/noconfirmrealty/${realtyId}`);
};

export const RegisterImage = (imgInfo) => {
    return http.post(
        `${config.localapi}/realty/image-upload`, imgInfo
    );
};




