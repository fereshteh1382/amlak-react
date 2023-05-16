import { toast } from "react-toastify";

export const successMessage = message => {
    toast.success(message, {
        theme: "colored" ,
        position: "top-right",
        closeOnClick: true
    });
};

export const errorMessage = message => {
    toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    // toast.error(message, {
    //     theme: "colored" ,
    //     position: "top-right",
    //     closeOnClick: true
    // });
};
