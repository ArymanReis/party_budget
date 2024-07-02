import { toast } from "react-toastify";

const useToast = (msg, status = null) => {

    if(!status) {
        toast.success(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
        })
    } else if(status === "error") {
        toast.success(msg, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
        })
    }

};

export default useToast;