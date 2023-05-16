import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import { reducers } from "../redux-reducers/index";

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loadingBarMiddleware()),
        /*window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()*/
    )
);

//subscribe
store.subscribe(() => console.log(store.getState()));
