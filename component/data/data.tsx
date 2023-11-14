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
import { MenuProps } from "antd";
import Link from "next/link";
export const sidebarData: MenuProps["items"] = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    icon: <MdAccountBalance className=" font-bold" />,
    key: "/dashboard",
  },
  {
    label: <Link href="/account">Account</Link>,
    icon: <MdOutlineAccountBalanceWallet className=" font-bold" />,
    key: "/account",
  },
  {
    label: <Link href="/payment">Payment</Link>,
    icon: <AiOutlineIdcard className=" font-bold" />,
    key: "/payment",
  },
  {
    label: <Link href="/payroll">Payroll</Link>,
    icon: <FaRegUser className=" font-bold" />,
    key: "/payroll",
  },
  {
    label: <Link href="/transaction">Transaction</Link>,
    icon: <GrTransaction className=" font-bold" />,
    key: "/transactions",
  },
  {
    label: <Link href="/invoice">Invoive</Link>,
    icon: <MdOutlineAdminPanelSettings className=" font-bold" />,
    key: "/invoice",
  },
  {
    label: <Link href="/contact">Contact</Link>,
    icon: <GrDocumentUser className=" font-bold" />,
    key: "/contact",
  },
  {
    label: <Link href="/administration">Administration</Link>,
    icon: <VscGitPullRequestGoToChanges className=" font-bold" />,
    key: "/administration",
  },

  {
    label: <Link href="/setting">Setting</Link>,
    icon: <FiSettings className=" font-bold" />,
    key: "/setting",
  },
];
