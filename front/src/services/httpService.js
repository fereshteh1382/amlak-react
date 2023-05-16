import axios from "axios";
// import { toast } from "react-toastify";

const token = localStorage.getItem("UserToken");
// if (token) axios.defaults.headers.common["JWT"] = `${token }`
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
    let exception = { statusCode :  0, message: "Server Error!"};
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (expectedErrors) {
        exception.statusCode = error.response.status;
    } else if (!expectedErrors) {

        if (error.response && error.response.status) {
            exception.statusCode = error.response.status;
        }

    }
    if(error.response && error.response.data)
        exception.message=(error.response.data.message)  ? error.response.data.message : error.response.data;

    return Promise.reject(exception);

});

const MyAxios = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}
export default MyAxios;