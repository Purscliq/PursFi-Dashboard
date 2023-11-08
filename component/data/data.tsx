import {
  MdOutlineAccountBalanceWallet,
  MdAccountBalance,
  MdOutlineAdminPanelSettings,
  MdEvent,
} from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GrTransaction, GrDocumentUser } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
export const sidebarData = [
  {
    title: "Dashboard",
    icon: <MdAccountBalance className=" font-bold" />,
    link: "/dashboard",
  },
  {
    title: "Account",
    icon: <MdOutlineAccountBalanceWallet className=" font-bold" />,
    link: "/account",
  },
  {
    title: "Payment",
    icon: <AiOutlineIdcard className=" font-bold" />,
    link: "/payment",
  },
  {
    title: "Payroll",
    icon: <FaRegUser className=" font-bold" />,
    link: "/dashboard/payroll",
  },
  {
    title: "Transaction",
    icon: <GrTransaction className=" font-bold" />,
    link: "/dashboard/transactions",
  },
  {
    title: "Invoive",
    icon: <MdOutlineAdminPanelSettings className=" font-bold" />,
    link: "/dashboard/invoice",
  },
  {
    title: "Contact",
    icon: <GrDocumentUser className=" font-bold" />,
    link: "/dashboard/contact",
  },
  {
    title: "Administration",
    icon: <VscGitPullRequestGoToChanges className=" font-bold" />,
    link: "/dashboard/administration",
  },

  {
    title: "Setting",
    icon: <FiSettings className=" font-bold" />,
    link: "/dashboard/user-setting",
  },
];
