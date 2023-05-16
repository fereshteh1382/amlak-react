import http from "./httpService";
import config from "./config.json";

export const getCourses = () => {
    return http.get(`${config.localapi}/posts/allposts_json`);
};

export const getCourse = courseId => {
    return http.get(`${config.localapi}/posts/post_json/${courseId}`);
};
