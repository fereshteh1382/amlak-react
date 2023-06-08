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

export const setNumberOfRemainingSmsAgency = (remainingms) => {
    return async (dispatch, getState)  => {
        const agencyUserInfo =   { ...getState().agencyUser,remainingSms: remainingms }       
        await dispatch(
        {   type: "SET_NUMBER_REMAINING_SMS_AGENCY_USER",
            payload: agencyUserInfo
        });
    };
};
