import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//import Course from "../components/Course/Course";
import MainLayout from "../components/Layouts/MainLayout";
import UserContext from "../components/context/userContext";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
//import Archive from "../components/Course/Archive";
//import SingleCourse from "../components/Course/SingleCourse";
//import UserProfile from "../components/Profile/UserProfile";
import { useSelector, useDispatch } from "react-redux";
//import { paginate } from "../utils/paginate";
//import { addUser, clearUser } from "../actions/user";
//import { decodeToken } from "../utils/decodeToken";
import Logout from "../components/Login/Logout";
import { isEmpty } from "lodash";
import NotFound from "../components/common/NotFound";

const Toplearn = () => {
    //const courses = useSelector(state => state.courses);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // const indexCourses = paginate(courses, 1, 8);

    /* useEffect(() => {
         const token = localStorage.getItem("token");
         if (token) {
             const decodedToken = decodeToken(token);
             const dateNow = Date.now() / 1000;
 
             if (decodedToken.payload.exp < dateNow) {
                 localStorage.removeItem("token");
                 dispatch(clearUser());
             } else dispatch(addUser(decodedToken.payload.user));
         }
     }, []);*/

    return (
        <MainLayout>
            <Switch>
                <Route
                    path="/login"
                    render={() =>
                        isEmpty(user) ? (
                            <UserContext>
                                <Login />
                            </UserContext>
                        ) : (
                            <Redirect to="/" />
                        )
                    }
                />
                <Route
                    path="/logout"
                    render={() =>
                        isEmpty(user) ? <Redirect to="/" /> : <Logout />
                    }
                />
                <Route
                    path="/register"
                    render={() =>
                        isEmpty(user) ? (
                            <UserContext>
                                <Register />
                            </UserContext>
                        ) : (
                            <Redirect to="/" />
                        )
                    }
                />
                {/* <Route path="/archive" component={Archive} />
                <Route path="/course/:id" component={SingleCourse} />
                <Route path="/user-profile" component={UserProfile} /> */}
                {/*  <Route
                    path="/"
                    exact
                    render={() => <Course courses={indexCourses} />}
                /> */}
                {/* <Route component={NotFound} /> */}
                {/*  <Route path="*" exact component={NotFound} /> */}
            </Switch>
        </MainLayout>
    );
};

export default Toplearn;
