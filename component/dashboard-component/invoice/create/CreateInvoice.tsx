"use client";
import { DatePicker } from "antd";
import { MdDeleteForever } from "react-icons/md";
import {
  CustomText as Text,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import Image from "next/image";
import logo from "@/assets/logo.svg";
const CreateInvoice = () => {
  return (
    <div className="grid grid-cols-1 w-[85%] gap-[1rem] px-[3%]">
      <div className="flex items-center justify-between">
        <span>
          <h2 className="font-semibold text-[18px] mb-3">Wayne Enteprise</h2>
          <p className="text-gray-500">1 Wayne street, Gotham</p>
          <p className="text-gray-500">Gotham City</p>
          <p className="text-gray-500">Nigeria</p>
          <p className="text-gray-500">+23485986945</p>
          <p className="font-semibold  mt-4">Click here to edit address</p>
        </span>
        <Image src={logo} alt="logo" className="" />
      </div>
      <hr />{" "}
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium text-sm">
              Invoice Code
            </label>
            <input
              type="email"
              id="email"
              placeholder="code"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium text-sm">
              Client Name
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="email"
                id="email"
                placeholder="client name"
                className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              />
              <span className="border px-4 font-semibold text-lg">+ </span>
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium text-sm">
              Invoice Title
            </label>
            <input
              type="email"
              id="email"
              placeholder="title"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium text-sm">
              Invoice Description
            </label>
            <input
              type="email"
              id="email"
              placeholder="description"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div>{" "}
        </div>{" "}
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-4">
          <label htmlFor="email" className="font-medium text-sm">
            Items
          </label>
          <input
            type="email"
            id="email"
            placeholder="title"
            className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
          />
        </div>{" "}
        <div className="flex flex-col space-y-4">
          <label htmlFor="email" className="font-medium text-sm">
            Quantity
          </label>
          <input
            type="email"
            id="email"
            placeholder="title"
            className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
          />
        </div>{" "}
        <div className="flex flex-col space-y-4">
          <label htmlFor="email" className="font-medium text-sm">
            Price
          </label>
          <input
            type="email"
            id="email"
            placeholder="title"
            className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
          />
        </div>{" "}
        <div className="flex flex-col space-y-4">
          <label htmlFor="email" className="font-medium text-sm">
            Price
          </label>
          <div className="flex space-x-3 items-center">
            <p className="font-semibold text-lg">N 210,000</p>
            <MdDeleteForever size={25} />{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <hr />
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="email" className="font-medium text-sm">
              Pursfibusnnes Account
            </label>
            <input
              type="email"
              id="email"
              placeholder="payment"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div>{" "}
          <div className="flex items-center justify-start w-full gap-[1rem]">
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="email" className="font-medium text-sm">
                Start Date
              </label>
              <DatePicker className="h-fit w-fit" placeholder="Start Date" />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="email" className="font-medium text-sm">
                Start Date
              </label>
              <DatePicker className="h-fit w-fit" placeholder="Due Date" />
            </div>{" "}
          </div>
          <span className="flex flex-col">
            <label htmlFor="info">Note/term</label>
            <Text id="info" />
            <span className="flex justify-between">
              <p>Maximum 500 characters</p>
              <p>0 / 500</p>
            </span>
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex space-x-6 items-center">
            <p className="p-2 border text-sm normal-case">+ Discount</p>
            <p className="p-2 border text-sm normal-case">+ Tax</p>
            <p className="p-2 border text-sm normal-case">+ Shipping</p>
          </div>
          <div className="flex items-center justify-between px-2 py-4 bg-black rounded-md text-white">
            <p>Subtotal:</p>
            <p>N20,0000,000</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 justify-end ">
        <Button className="!h-[3rem] !bg-transparent ">Preview</Button>
        <Button className="!h-[3rem] !bg-Primary  text-white hover:!text-white">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CreateInvoice;
