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
import { logOut } from "@/store/userSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const DashboardSider = () => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { user, business } = useAppSelector((store) => store?.user);
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
      <aside className="flex flex-col space-y-4 w-[16rem] h-screen overflow-hidden  shadow-xl bg-white px-4 py-2 overflow-y-scroll">
        <Image src={logo} alt="logo" className="mx-auto" />
        <div className=" border border-gray-200" />
        <details className="dropdown">
          <summary className=" flex space-x-2 items-center justify-center  my-4  ">
            {user?.profilePicture ? (
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src={user.profilePicture}
                    alt="User-pic"
                    width={100}
                    height={100}
                    objectFit="center"
                  />{" "}
                </div>
              </div>
            ) : (
              <Avatar
                style={{ backgroundColor: "#CDA4FF" }}
                size={60}
                className="!text-sm text-black relative"
              >
                {`${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`}{" "}
              </Avatar>
            )}
            <span className="text-sm">
              <p className="font-medium text-[16px]">
                {" "}
                {business?.businessName &&
                  business?.businessName?.charAt(0).toUpperCase() +
                    business?.businessName?.slice(1)}
              </p>
              <p>
                <p>
                  {user?.firstName &&
                    user?.firstName?.charAt(0).toUpperCase() +
                      user?.firstName?.slice(1)}{" "}
                  {user?.lastName &&
                    user?.lastName?.charAt(0).toUpperCase() +
                      user?.lastName?.slice(1)}
                </p>{" "}
              </p>
            </span>
            <RiArrowDropDownLine className="cursor-pointer" size={25} />
          </summary>
          <ul className="-mt-4  menu dropdown-content z-[1]  w[15rem] w-[98%] mx-auto">
            <li
              onClick={() => dispatch(logOut())}
              className="w-full bg-[#EEF2F7] p-2 cursor-pointer text-center items-center rounded-box mx-auto block"
            >
              Log Out
            </li>
          </ul>
        </details>
        <div className=" border border-gray-200" />

        <Dropdown
          className="flex p-2 items-center justify-center mx-2 my-4 border rounded cursor-pointer bg-[#FAFAFA]"
          menu={{ items }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <p className="font-semibold"> Quick Action</p>{" "}
              <AiOutlineCaretDown />
            </Space>
          </a>
        </Dropdown>
        <div className=" border border-gray-200" />

        <Menu
          selectedKeys={[activePath]}
          items={sidebarData}
          className="!space-y-3 !w-full"
          mode="inline"
        />
        <DashboardModal open={isModalOpen} setOpen={setIsModalOpen} />
      </aside>
    </div>
  );
};

export default DashboardSider;
