"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import { sidebarData } from "@/component/data/data";
import { usePathname } from "next/navigation";
import { AiOutlineCaretDown, AiOutlineFileText } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
import { CustomMenu as Menu } from "@/lib/AntdComponents";

const DashboardSider = () => {
  const pathName = usePathname();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Add Money",
      icon: <BiMoney />,
      className: "font-semibold",
    },

    {
      key: "2",
      label: "Make Payment",
      icon: <MdAccountBalance />,
      className: "font-semibold",
    },
    {
      key: "3",
      label: "Send Invoice",
      icon: <AiOutlineFileText />,
      className: "font-semibold",
    },
  ];
  return (
    <div className="drawer-side z-10 ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col justify-between w-[16rem] h-screen overflow-hidden  shadow-xl bg-white px-4 py-2 overflow-y-scroll">
        <Image src={logo} alt="logo" className="mx-auto" />
        <div className=" border border-gray-200" />
        <div className="flex space-x-2 items-center justify-center mx-2 my-4 p-2 bg-[#EEF2F7] rounded-md ">
          <Avatar
            style={{ backgroundColor: "#CDA4FF", verticalAlign: "middle" }}
            size="large"
          >
            JD
          </Avatar>
          <span className="text-sm">
            <p>Pursfibusiness</p>
            <p>John Doe</p>
          </span>
          <RiArrowDropDownLine size={25} />
        </div>
        <div className="flex p-2 items-center justify-center mx-2 my-4 border rounded">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <p className="font-semibold"> Quick Action</p>{" "}
                <AiOutlineCaretDown />
              </Space>
            </a>
          </Dropdown>
        </div>
        <Menu selectedKeys={[pathName]} items={sidebarData} />
        {/* sidebar content */}
        {/* <ul className="flex flex-col space-y-4 ">
          {sidebarData.map((item) => (
            <div
              key={item.link}
              onClick={() => router.push(item.link)}
              className={`flex items-center px-3 py-2  rounded-lg cursor-pointer text-gray-600 ${
                pathName.includes(item.link) ? " text-gray-900" : ""
              }`}
            >
              {item.icon}
              <span className="mx-4">{item.title}</span>
            </div>
          ))}
        </ul> */}
      </aside>
    </div>
  );
};

export default DashboardSider;
