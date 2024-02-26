import { FaRegHeart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";

const dashboardData = [
  { id: 1, name: "علاقه‌مندی", icon: <FaRegHeart />, path:"loved"},
  { id: 2, name: "سبدخرید", icon: <IoCartOutline />, path:"cart"},
  { id: 3, name: "حساب کاربری", icon: <GoHome />, path:"dashboard"},
  { id: 4, name: "خروج", icon: <MdLogout />, path:"logout"},
];

export default dashboardData;
