import { combineReducers } from "redux";
import { agencyUserReducer } from "./agencyUser";
import { estateReducer } from "./estate";

export const reducers = combineReducers({
    agencyUser: agencyUserReducer,
    publicEstates: estateReducer
});
