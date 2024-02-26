import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = () => {
  return <ToastContainer rtl="rtl" theme="colored" />;
};

export const notify = (type , message) => {
  type === "error"
    ? toast.error(message, { position: "top-right" })
    : toast.success(message, { position: "top-right" });
};

export default Notify;
