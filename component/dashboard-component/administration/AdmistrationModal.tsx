import { Modal } from "antd";
import React from "react";

import {
  CustomInput as Input,
  CustomButton as Button,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
const AdminstrationModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered={true}
      width="35%"
    >
      <div className=" flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-1 text-center">Send Invite </h2>
        <p className="text-sm text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          quidem voluptatem!{" "}
        </p>
        <form className="w-full space-y-4 mt-6 items-center px-2">
          <div className="space-x-2 flex flex-col md:flex-row w-full md:w-[400px]">
            <div className="w-full space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="  w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className=" disabled:bg-blue-50 w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1 w-full md:w-[400px]">
            <label htmlFor="email" className="font-semibold text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full md:w-[400px]">
            <label htmlFor="" className="font-semibold text-sm">
              Phone Number
            </label>
            <div className="flex items-center">
              <select
                id="countryCode"
                className="w-1/4 px-3 py-2 disabled:bg-blue-50 border border-gray-300 text-gray-800 text-sm rounded-l-md focus:outline-none"
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Roles
            </label>
            <Select
              className="!w-full"
              placeholder="select roles"
              options={[
                { value: "individual", label: "Individual" },
                { value: "business", label: "Business" },
                { value: "enterprise", label: "Enterprise" },
                { value: "limited liability", label: "Limited Liability" },
              ]}
            />
          </div>

          <Button className="!h-[3rem] !bg-Primary w-full text-white hover:!text-white">
            Send request
          </Button>
        </form>{" "}
      </div>{" "}
    </Modal>
  );
};

export default AdminstrationModal;
