export const agencyUserReducer = (state = {remainingSms:0}, action) => {
    switch (action.type) {
        case "SET_AGENCY_USER":
            return { ...action.payload }; 
        case "CLEAR_AGENCY_USER":
            return { ...action.payload };
        case "GET_NUMBER_REMAINING_SMS_AGENCY_USER":
            return { ...action.payload };     
        default:
            return state;
    }
};
