import jwt_decode from 'jwt-decode';

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
