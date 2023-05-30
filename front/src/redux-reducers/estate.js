export const estateReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_PUBLIC_ESTATES":
            return [ ...action.payload ]; 
        default:
            return state;
    }
};
