export const addAgencyUser = agency => {
    return async dispatch => {
        await dispatch({ type: "SET_AGENCY_USER", payload: agency });
    };
};

export const clearAgencyUser = () => {
    return async dispatch => {
        await dispatch({ type: "CLEAR_AGENCY_USER", payload: {} });
    };
};
