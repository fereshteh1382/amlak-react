import { getAllPublicEstateApi } from "../services/agencyEstateAPIs";

export const getAllPublicEstate = () => {
    return async (dispatch) => {
        const { data } = await getAllPublicEstateApi();
        const allState = (data.allrealtys) ? data.allrealtys : []
        
        await dispatch({ type: "GET_PUBLIC_ESTATES", payload: allState });
      };
};

