"use client";
import { DatePicker } from "antd";
import {
  CustomText as Text,
  CustomButton as Button,
  CustomInputNumber as InputNumber,
  CustomInput as Input,
} from "@/lib/AntdComponents";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useAppSelector } from "@/store/hooks";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import ItemsTable from "./ItemsTable";
import { useCreateInvoiceMutation } from "@/services/invoiceService";
import CreateInvoiceModal from "./CreateInvoiceModal";
interface DataType {
  key: React.Key;
  itemName: string;
  itemQty: number;
  itemPrice: number;
}
const initialState = {
  title: "",
  clientPhone: "",
  amount: 0,
  currency: "",
  narration: "",
  discount: 0,
  dueDate: "",
  tax: "",
  senderMail: "",
  clientMail: "",
  clientName: "",
  message: "",
  subject: "",
  taxPercent: 0,
  discountPercent: 0,
  info: [
    {
      itemName: "",
      itemQty: "",
      itemPrice: "",
      itemAmount: "",
    },
  ],
  businessId: "",
};
const CreateInvoice = () => {
  const business = useAppSelector((store) => store.user.business);
  const profile = useAppSelector((store) => store.user.user);
  const [formData, setFormData] = useState(initialState);
  const [createInvoice, { isLoading }] = useCreateInvoiceMutation();
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: 0,
      itemName: "enter item name...",
      itemPrice: 0,
      itemQty: 0,
    },
  ]);
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createInvoice(formData)
      .unwrap()
      .then(() => {})
      .catch((err) => {});
  };
  const [open, setOpen] = useState(false);

  return (
    <form className="grid grid-cols-1 w-[85%] gap-[1rem] px-[3%]">
      <div className="flex items-center justify-between">
        <span>
          <h2 className="font-semibold text-[18px] mb-3">
            {business?.businessName}
          </h2>
          <p className="text-gray-500">{business?.businessAddress}</p>
          <p className="text-gray-500">Nigeria</p>
          <p className="text-gray-500">{profile?.phoneNumber}</p>
          {/* <p className="font-semibold  mt-4">Click here to edit address</p> */}
        </span>
        <Image src={logo} alt="logo" className="" />
      </div>
      <hr />{" "}
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3 self-start">
          {/* <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="font-medium text-sm">
              Invoice Code
            </label>
            <input
              type="email"
              id="email"
              placeholder="code"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
            />
          </div> */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="title" className="font-medium text-sm">
              Invoice Title
            </label>
            <Input
              id="title"
              placeholder="title"
              className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              value={formData.title}
              name="title"
              onChange={onInputChange}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="font-medium text-sm">
              Client Name
            </label>
            <div className="flex items-center space-x-3">
              <Input
                id="name"
                placeholder="client name"
                className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                value={formData.clientName}
                name="clientName"
                required
                onChange={onInputChange}
              />
              {/* <span className="border px-4 font-semibold text-lg">+ </span> */}
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-col space-y-3 self-start">
          <div className="flex flex-col space-y-1">
            <label htmlFor="desc" className="font-medium text-sm">
              Invoice Description
            </label>
            <Input
              id="desc"
              placeholder="description"
              className=" w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              value={formData.narration}
              name="narration"
              onChange={onInputChange}
              required
            />
          </div>{" "}
        </div>{" "}
      </div>
      <hr />
      <ItemsTable dataSource={dataSource} setDataSource={setDataSource} />
      <hr />
      <div className="grid grid-cols-2 gap-[3rem] items-start justify-between">
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
          <div className="flex space-x-6 items-center justify-between">
            {/* <p className="p-2 border text-sm normal-case">+ Discount</p> */}
            <InputNumber
              controls={false}
              // prefix="+"
              placeholder="Discount"
              suffix="%"
              className="!w-full"
            />
            <InputNumber
              controls={false}
              prefix="+"
              placeholder="Tax"
              // suffix="%"
              className="!w-full"
            />
            <InputNumber
              controls={false}
              prefix="+"
              placeholder="Shipping"
              // suffix="%"
              className="!w-full"
            />
          </div>
          <div className="flex items-center justify-between px-2 py-4 bg-black rounded-md text-white">
            <p>Subtotal:</p>
            <p>N20,0000,000</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 justify-end ">
        <Button className="!h-[3rem] !bg-transparent ">Preview</Button>
        <Button
          type="primary"
          htmlType="submit"
          onClick={()=>setOpen(true)}
          className="!h-[3rem] !bg-Primary  text-white hover:!text-white"
        >
          Continue
        </Button>
      </div>
      <CreateInvoiceModal open={open} setOpen={setOpen}  />
    </form>
  );
};

export default CreateInvoice;
