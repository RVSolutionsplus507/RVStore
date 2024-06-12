import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useToast = () => {
    useEffect(() => {
        toast({
            position: "bottom",
            style: {
                background: "rgba(0, 128, 0, 0.2)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px 0 rgba(0, 128, 0, 0.37)",
                color: "#fff",
                borderRadius: "10px"
            }
        });
    }, [toast]);

    const notifySuccess = (message) => {
        toast.success(message);
    };

    const notifyError = (message) => {
        toast.error(message);
    };

    return { notifySuccess, notifyError };
};

export { useToast };
