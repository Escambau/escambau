import { toast } from "react-toastify";
import { MdErrorOutline } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

export const creationError = () => {
  toast.error('Error', {
    icon: <MdErrorOutline />,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false
  });
};

export const creationSucess = () => {
  toast.success('sucess', {
    icon: <AiFillCheckCircle/>,
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false
  });
};