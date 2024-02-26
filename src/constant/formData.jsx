import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const formData = [
  {
    id: 1,
    name: "userName",
    type: "text",
    icon: <FaUser />,
  },
  {
    id: 2,
    name: "email",
    type: "text",
    icon: <MdEmail />,
  },
  {
    id: 3,
    name: "password",
    type: "password",
    icon: <RiLockPasswordFill />,
  },
  {
    id: 4,
    name: "confirmPassword",
    type: "password",
    icon: <RiLockPasswordFill />,
  },
];

export default formData;
