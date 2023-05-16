import { combineReducers } from "redux";
import { agencyUserReducer } from "./agencyUser";

export const reducers = combineReducers({
    agencyUser: agencyUserReducer,
});
