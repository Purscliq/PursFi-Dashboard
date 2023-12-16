"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import {
  CustomButton as Button,
  CustomTable as Table,
} from "@/lib/AntdComponents";
import { ColumnsType } from "antd/es/table";
import InvoicePaymentModal from "./InvoicePaymentModal";
interface DataType {
  key: string;
  title: string;
  quantity: number;
  price: number;
  amount: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Items",
    dataIndex: "title",
    key: "title",
    render: (text) => <p>{text}</p>,
    width: "25%",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (text) => <p>{text}</p>,
    width: "25%",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <p>{text}</p>,
    width: "25%",
  },
  {
    title: "Amount",
    key: "tags",
    dataIndex: "amount",
    render: (text) => <p>{text}</p>,
    width: "25%",
  },
];

const data: DataType[] = [
  {
    key: "1",
    title: "Item 1",
    quantity: 1,
    price: 1000,
    amount: 1000,
  },
  {
    key: "2",
    title: "Item 1",
    quantity: 1,
    price: 1000,
    amount: 1000,
  },
  {
    key: "3",
    title: "Item 1",
    quantity: 1,
    price: 1000,
    amount: 1000,
  },
  {
    key: "3",
    title: "Item 1",
    quantity: 1,
    price: 1000,
    amount: 1000,
  },
  {
    key: "3",
    title: "Item 1",
    quantity: 1,
    price: 1000,
    amount: 1000,
  },
  {
    key: "3",
    title: "Item 1",
    quantity: 1,
    price: 1000,
    amount: 1000,
  },
];
const InvoiceGateway = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px] bg-[#FAFAFA] relative">
        <nav className="py-4 px-8 bg-white flex justify-between items-center sticky top-0">
          <Image src={logo} alt="logo" />
          <Button>learn about us</Button>
        </nav>
        <main className=" flex flex-col items-center justify-center bg-white w-[90%] md:w-[60%] m-auto my-[2rem] py-6 px-[1%] overflow-scroll">
          <div className="flex items-stretch justify-between w-full pb-[2%] border-b border-[#B8C9C9]">
            <span>
              <h2 className="font-semibold text-[18px] mb-2">
                Wayne Enterprise
              </h2>
              <p className="text-gray-500">1 Wayne street, Gotham</p>
              <p className="text-gray-500">Nigeria</p>
              <p className="text-gray-500">+234705044568</p>
            </span>
            <span className="bg-[#FAFAFA] flex items-center py-[3%] px-[2%]">
              <Image src={logo} alt="logo" className="" />
            </span>
          </div>
          <div className="border-b border-[#B8C9C9] py-[2%] w-full">
            <div className="grid grid-cols-2 items-center justify-between w-full pb-[2%]">
              <span className="flex flex-col gap-[1rem] wfull">
                <h2 className="font-[700] text-[#181336] text-[18px] mb-1">
                  Bill to
                </h2>
                <p className="text-[#181336] text-[14px] font-[600]">
                  Bruce Wayne
                </p>
                <p className="text-[#515B6F] text-[14px] font-[500]">
                  Brucewayne.com
                </p>
              </span>
              <span className="flex flex-col gap-[1rem] w-full selfend justify-self-end">
                <span className="flex gap-[2%] w-full justify-end">
                  <p className="text-[#181336] font-[600] text-[14px]">
                    Invoice Number
                  </p>
                  <p className="text-[#181336] font-[400] text-[14px]">
                    334464676645
                  </p>
                </span>
                <span className="flex gap-[2%] w-full justify-end">
                  <p className="text-[#181336] font-[600] text-[14px]">
                    Invoice Date
                  </p>
                  <p className="text-[#181336] font-[400] text-[14px]">
                    12/12/2023
                  </p>
                </span>
                <span className="flex gap-[2%] w-full justify-end">
                  <p className="text-[#181336] font-[600] text-[14px]">
                    Due Date
                  </p>
                  <p className="text-[#181336] font-[400] text-[14px]">
                    12/12/2023
                  </p>
                </span>
              </span>
            </div>
            <Table
              className="!w-full"
              columns={columns}
              dataSource={data}
              pagination={false}
              scroll={{ y: 200 }}
            />
            <div className="flex justify-between w-full mt-4 text-[#181336] text-[16px] font-[600]">
              <span className="">Discount</span>
              <span className="">1000.00</span>
            </div>
            <div className="flex justify-between w-full mt-4 text-[#181336] text-[16px] font-[600]">
              <span className="">Tax</span>
              <span>%10</span>
              <span className="">1000.00</span>
            </div>
            <div className="flex justify-between py-[2%] w-full border-t border-[#B8C9C9] mt-[1%]">
              <span className="text-[#181336] text-[20px] font-[600]">
                Subtotal
              </span>
              <span className="text-[#181336] text-[20px] font-[600]">
                10,000.00
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[1%] justify-selfstart self-start pt-[2%]">
            <span className="text-[#181336] text-[18px] font-[700]">
              Bank Details
            </span>
            <span className="text-[#181336] text-[14px] font-[600]">
              Pursbusiness
            </span>
            <span className="text-[#515B6F] text-[14px] font-[500]">
              0094565067
            </span>
          </div>
        </main>
        <footer className="py-4 px-8 bg-white flex justify-end items-center gap-1 sticky bottom-0">
          <Button>Download Invoice</Button>
          <Button
            onClick={() => setIsModalOpen(true)}
            type="primary"
            className="!bg-black"
          >
            Pay now
          </Button>
        </footer>
      </div>
      <InvoicePaymentModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  );
};

export default InvoiceGateway;
