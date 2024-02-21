import { GiConverseShoe, GiSchoolBag } from "react-icons/gi";
import { IoGlassesOutline, IoWoman } from "react-icons/io5";
import { FiWatch } from "react-icons/fi";
import { MdOutlineMan } from "react-icons/md";

const pagesSectionData = [
  { id: 1, icon: <GiConverseShoe />, name: "کفش", path: "shoe" },
  { id: 2, icon: <IoGlassesOutline />, name: "عینک", path: "glasses" },
  { id: 3, icon: <MdOutlineMan />, name: "مردانه", path: "man" },
  { id: 4, icon: <IoWoman />, name: "زنانه", path: "woman" },
  { id: 5, icon: <FiWatch />, name: "ساعت", path: "watch" },
  { id: 6, icon: <GiSchoolBag />, name: "کیف", path: "bag" },
];

export default pagesSectionData;
