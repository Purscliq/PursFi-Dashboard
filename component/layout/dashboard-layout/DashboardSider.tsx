"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import { sidebarData, activeKeys } from "@/component/data/data";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineCaretDown, AiOutlineFileText } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { MdAccountBalance } from "react-icons/md";
import { CustomMenu as Menu } from "@/lib/AntdComponents";
import DashboardModal from "@/component/dashboard-component/dashboard/DashboardModal";
import { useState, useLayoutEffect } from "react";

const DashboardSider = () => {
  const pathName = usePathname();
  const [activePath, setActivePath] = useState("");
  const { push } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useLayoutEffect(() => {
    setActivePath(activeKeys.filter((value) => pathName.includes(value))[0]);
  }, [pathName]);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Add Money",
      icon: <BiMoney size={20} />,
      className: "!font-semibold !text-[15px]",
      onClick: () => setIsModalOpen(true),
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
        <Menu
          selectedKeys={[activePath]}
          items={sidebarData}
          className="!space-y-3"
          mode="inline"
        />
        <DashboardModal open={isModalOpen} setOpen={setIsModalOpen} />
      </aside>
    </div>
  );
};

export default DashboardSider;
