import { AiOutlineQuestionCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { FiBook,FiFileText } from "react-icons/fi";
import { BiCookie } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaBalanceScale } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";

const MenuLinks = {
  helpAndSupport: [
    {
      to: "",
      name: "Attractions Help center",
      icon: <AiOutlineQuestionCircle />,
    },
  ],
  inspiration: [
    {
      to: "",
      name: "Travel articles",
      icon: <FiBook />,
    },
    {
      to: "",
      name: "Travel communities",
      icon: <IoIosPeople />,
    },
  ],
  settingsAndLegal: [
    {
      to: "",
      name: "About TCtours.com",
      icon: <AiOutlineInfoCircle />,
    },
    {
      to: "",
      name: "Careers",
      icon: <IoStatsChartSharp />,
    },
    {
      to: "",
      name: "Press center",
      icon: <HiOutlineNewspaper />,
    },
    {
      to: "",
      name: "Privacy & cookies",
      icon: <BiCookie />,
    },
    {
      to: "",
      name: "Terms & conditions",
      icon: <FiFileText />,
    },
    {
      to: "",
      name: "Legal",
      icon: <FaBalanceScale />,
    },
  ],
};

export default MenuLinks;
