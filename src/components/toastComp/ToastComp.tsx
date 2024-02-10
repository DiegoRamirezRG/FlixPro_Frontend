import { toast, ToastPosition } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (text: string, position: ToastPosition) => {
    toast.success(text, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light", // You can customize the theme for success toasts
    });
};

export const showErrorTost = (text: string, position: ToastPosition) => {
    toast.error(text, {
        position: position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}