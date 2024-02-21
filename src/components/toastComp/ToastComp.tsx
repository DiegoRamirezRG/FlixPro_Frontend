import { toast, ToastPosition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (text: string, position: ToastPosition, light?: boolean) => {
    toast.success(text, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: light ? light ? "colored" : "dark" : "dark",
    });
};

export const showErrorTost = (text: string, position: ToastPosition, light?: boolean) => {
    toast.error(text, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: light ? light ? "colored" : "dark" : "dark",
    });
}