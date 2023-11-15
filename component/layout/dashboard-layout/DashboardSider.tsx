"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import { sidebarData } from "@/component/data/data";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineCaretDown, AiOutlineFileText } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
import { CustomMenu as Menu } from "@/lib/AntdComponents";

const DashboardSider = () => {
  const pathName = usePathname();
  const { push } = useRouter();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Add Money",
      icon: <BiMoney size={20} />,
      className: "!font-semibold !text-[15px]",
      onClick: () => push("dashboard"),
    },

    {
      key: "2",
      label: "Make Payment",
      icon: <MdAccountBalance size={20} />,
      className: "!font-semibold !text-[15px]",
      onClick: () => push("payment"),
    },
    {
      key: "3",
      label: "Send Invoice",
      icon: <AiOutlineFileText size={20} />,
      className: "!font-semibold !text-[15px]",
      onClick: () => push("invoice"),
    },
  ];
  return (
    <div className="drawer-side z-10 ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col space-y-5 w-[16rem] h-screen overflow-hidden  shadow-xl bg-white px-4 py-2 overflow-y-scroll">
        <Image src={logo} alt="logo" className="mx-auto" />
        <div className=" border border-gray-200" />
        <details className="dropdown">
          <summary className=" flex space-x-2 items-center justify-center mx-2 my-4 p-2 bg-[#EEF2F7]">
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
          </summary>
          <ul className="-mt-4 shadow menu dropdown-content z-[1]  w-52">
            <li className="w-full bg-[#EEF2F7] p-2 cursor-pointer items-center rounded-box ">
             Log Out
            </li>
          
          </ul>
        </details>
        {/* <div className="flex space-x-2 items-center justify-center mx-2 my-4 p-2 bg-[#EEF2F7] rounded-md ">
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
        </div> */}
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
