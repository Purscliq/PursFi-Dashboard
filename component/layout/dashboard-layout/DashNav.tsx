import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
const DashNav = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-4 py-2">
        <label
          htmlFor="my-drawer-2"
          className="flex lg:hidden text-blue-800 px-3"
        >
          <CgMenuRightAlt size="25" />
        </label>

        <div className="relative">
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search for payment, invoices, transactions"
            className="w-full md:w-[320px] rounded-md border-gray-300 border py-2 pe-10 shadow-sm sm:text-sm px-3 ring-0   bg-inherit"
          />
        </div>
        <div className="space-x-4 items-center flex">
          <div className="hidden lg:flex space-x-3  px-2 items-center border border-gray-700 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-700"></span>
            <span>New update</span>
          </div>
          <IoIosNotifications className="flex lg:hidden" size={26} />
          <BiSolidHelpCircle className="hidden md:flex text-black" size={26} />
        </div>
      </nav>
      <div className="my-3 border border-gray-200" />
    </>
  );
};

export default DashNav;
