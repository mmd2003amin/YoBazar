import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notify = () => {
  return <ToastContainer rtl="rtl" theme="colored" autoClose={2500} />;
};

const notify = (type, message) => {
  type === "error"
    ? toast.error(message, { position: "top-right" })
    : toast.success(message, { position: "top-right" });
};
export { notify };
export default Notify;
