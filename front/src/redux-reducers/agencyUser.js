export const agencyUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_AGENCY_USER":
            return { ...action.payload }; 
        case "CLEAR_AGENCY_USER":
            return { ...action.payload };
        default:
            return state;
    }
};
