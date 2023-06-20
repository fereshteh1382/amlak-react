import jwt_decode from 'jwt-decode';
import { isEmpty } from 'lodash';

export const decodeToken = (token) => {
    return jwt_decode(token, { complete: true });
};


export const getUserFromToken = (token) => {
    return decodeToken(token).user;
};

export const SetUserInfoByToken = (data) => {
    let userInfo = {};
    if (data && data.token) {
        localStorage.setItem("UserToken", data.token);
        const tokenInfo = decodeToken(data.token);
        const dateNow = Date.now() / 1000;
        if (tokenInfo.exp < dateNow) {
            localStorage.removeItem("UserToken");
        }
        else{
            userInfo = { Name: tokenInfo.user.fullname, mobile: tokenInfo.user.mobile }
        }

    }
    return userInfo;
};

export const SetAdminInfoByToken = (data) => {
    let adminInfo = {};
    if (data && data.token) {
        localStorage.setItem("AdminToken", data.token);
        const tokenInfo = decodeToken(data.token);
        console.log(tokenInfo);
        const dateNow = Date.now() / 1000;
        if (tokenInfo.exp < dateNow) {
            localStorage.removeItem("AdminToken");
        }
        else{
            adminInfo = { Name: tokenInfo.user.fullname, mobile: tokenInfo.user.mobile }
        }

    }
    return adminInfo;
};



export const getUserInfoByToken = () => {
    let userInfo = {};
    const token = localStorage.getItem("UserToken");
    if(token){
        
        const tokenInfo = decodeToken(token);
        const dateNow = Date.now() / 1000;
        if (tokenInfo.exp < dateNow) {
            localStorage.removeItem("UserToken");
        }
        else{
            userInfo = { Name: tokenInfo.user.fullname, mobile: tokenInfo.user.mobile }
        }
    }
    return userInfo;
};

export const getUserForAxios = () => {
    let userInfo = {};
    const token = localStorage.getItem("UserToken");
    if(token){
        const tokenInfo = decodeToken(token);
        const dateNow = Date.now() / 1000;
        if (tokenInfo.exp < dateNow) {
            localStorage.removeItem("UserToken");
        }
        else{
            userInfo = {userId:tokenInfo.user.userId, Name: tokenInfo.user.fullname, mobile: tokenInfo.user.mobile}
        }
    }
    return userInfo;
};

export const getUserId = () => {
    const token = localStorage.getItem("UserToken");
    if(token){
        const tokenInfo = decodeToken(token);
        const dateNow = Date.now() / 1000;
        if (tokenInfo.exp < dateNow) {
            localStorage.removeItem("UserToken");
        }
        else{
            return tokenInfo.user.userId
        }
    }
    return 0;
};

export const existUser = () =>{
    const user = getUserInfoByToken();
    return user && user.mobile && !isEmpty(user.mobile);
}

export const ClearAllUserTokens = () => {
    localStorage.removeItem("UserToken");
    localStorage.removeItem("AdminToken");
}

export const existAdmin = () =>{
    const token = localStorage.getItem("AdminToken");
    if(token){
        
        const tokenInfo = decodeToken(token);
        const dateNow = Date.now() / 1000;
        if (tokenInfo.exp >= dateNow) {
            return true;
        }
    }
    return false;
}