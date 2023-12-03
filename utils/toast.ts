import { toast } from "react-toastify";
export const errToast = (text: string) => {
  toast.error(text);
};
export const successToast = (text: string) => {
  toast.success(text);
};
