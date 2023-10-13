import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Avatar } from "antd";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";
const AsideBar = () => {
  return (
    <div className="drawer-side z-10 ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col justify-between w-[16rem] h-screen overflow-hidden  shadow-xl bg-white p-4">
        <Image src={logo} alt="logo" className="mx-auto" />
        <div className="flex space-x-2 items-center justify-center mx-2 my-4 bg-[#EEF2F7] rounded-md ">
          <Avatar
            style={{ backgroundColor: "#CDA4FF", verticalAlign: "middle" }}
            size="large"
          >
            JD
          </Avatar>
          <span className="font-medium">John Doe</span>
          <RiArrowDropDownLine size={25} />
        </div>
        <div className="flex flex-col space-y-2 bg-[#FAFAFA] p-3 rounded text-[#000000]">
          <p className="text-lg mb-4">Tip to upload Document</p>
          <div className="flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 0C2.9159 0 0 2.9159 0 6.5C0 10.0841 2.9159 13 6.5 13C10.0841 13 13 10.0841 13 6.5C13 2.9159 10.0841 0 6.5 0ZM5.20065 9.36845L2.7872 6.9602L3.705 6.0398L5.19935 7.53155L8.64045 4.09045L9.55955 5.00955L5.20065 9.36845Z"
                fill="#2EB57E"
              />
            </svg>{" "}
            <p className="text-sm"> use clear not blurry image</p>
          </div>
          <div className="flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 0C2.9159 0 0 2.9159 0 6.5C0 10.0841 2.9159 13 6.5 13C10.0841 13 13 10.0841 13 6.5C13 2.9159 10.0841 0 6.5 0ZM5.20065 9.36845L2.7872 6.9602L3.705 6.0398L5.19935 7.53155L8.64045 4.09045L9.55955 5.00955L5.20065 9.36845Z"
                fill="#2EB57E"
              />
            </svg>{" "}
            <p className="text-sm"> make sure your ID number is visible</p>
          </div>{" "}
          <div className="flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.5 0C2.9159 0 0 2.9159 0 6.5C0 10.0841 2.9159 13 6.5 13C10.0841 13 13 10.0841 13 6.5C13 2.9159 10.0841 0 6.5 0ZM5.20065 9.36845L2.7872 6.9602L3.705 6.0398L5.19935 7.53155L8.64045 4.09045L9.55955 5.00955L5.20065 9.36845Z"
                fill="#2EB57E"
              />
            </svg>{" "}
            <p className="text-sm"> make sure you Upload Correct Images</p>
          </div>
        </div>
        <div className="flex space-x-2 items-center justify-center mx-2 my-4 bg-[#EEF2F7] rounded-md py-4">
          <BsCameraVideo />
          <p className="text-sm font-medium">Watch how to fill the form</p>
        </div>
        <div className="flex flex-col space-y-2  justify-center  bg-[#EEF2F7] rounded-md py-2 px-2">
          <p>Need Help?</p>{" "}
          <p className="text-Primary">Call us on 07045567788</p>{" "}
          <p className="text-Primary">Send us Email</p>
        </div>
      </aside>
    </div>
  );
};

export default AsideBar;
