import FilterIcon from "@/assets/icon/FilterIcon";
import TableIcon from "@/assets/icon/TableIcon";
import {
  CustomTable as Table,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import { Dropdown, Menu, MenuProps, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import { BsSquare } from "react-icons/bs";
import DeatilsDrawe from "../DetailsDrawe";
interface EmployeeData {
  key: string;
  firstName: string;
  gross: string;
  deduction: string;
  amount: string;
  status: string;
}
const data: EmployeeData[] = [
  {
    key: "1",
    firstName: "John",
    gross: "₦2000",
    deduction: "₦500",
    amount: "₦1500",
    status: "paid",
  },
  {
    key: "2",
    firstName: "Alice",
    gross: "₦2500",
    deduction: "₦600",
    amount: "₦1900",
    status: "unpaid",
  },
  {
    key: "3",
    firstName: "Bob",
    gross: "₦1800",
    deduction: "₦400",
    amount: "₦1400",
    status: "unpaid",
  },
  {
    key: "4",
    firstName: "Emma",
    gross: "₦3000",
    deduction: "₦700",
    amount: "₦2300",
    status: "paid",
  },
  {
    key: "5",
    firstName: "Michael",
    gross: "₦2200",
    deduction: "₦300",
    amount: "₦1900",
    status: "unpaid",
  },
  {
    key: "6",
    firstName: "Sophia",
    gross: "₦2700",
    deduction: "₦550",
    amount: "₦2150",
    status: "paid",
  },
];

const Contractor = ({ data, isLoading }: { data: any; isLoading: boolean }) => {
  const [open, setOpen] = useState(false);
  const columns: ColumnsType<EmployeeData> = [
    {
      title: (
        <span className="flex items-center  space-x-2">
          <BsSquare />
        </span>
      ),
      dataIndex: "",
      render: () => <BsSquare />,
    },
    {
      title: (
        <span className="flex items-center  space-x-2">
          <p>First Name</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: (
        <span className="flex items-center  space-x-2">
          <p>Gross</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "gross",
      key: "gross",
    },
    {
      title: (
        <span className="flex items-center  space-x-2">
          <p>Deduction</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "deduction",
      key: "deduction",
      render: (name) => <p className="text-red-500">{name}</p>,
    },
    {
      title: (
        <span className="flex items-center  space-x-2">
          <p>Amount</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: (
        <span className="flex items-center  space-x-2">
          <p>Status</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <p
          className={`p-1 rounded-md w-fit text-sm ${
            status === "paid" ? "bg-green-200" : "bg-red-200"
          }`}
        >
          {status}
        </p>
      ),
    },
    {
      title: (
        <span className="flex items-center  space-x-2">
          <p>Action</p>
          <TableIcon className="ml-4" />
        </span>
      ),
      dataIndex: "memberId",
      render: () => {
        const menu: React.ReactElement<MenuProps> = (
          <Menu>
            <Menu.Item
              key="show-details"
              onClick={() => {
                setOpen(true);
              }}
            >
              View details{" "}
            </Menu.Item>
            <Menu.Item key="download-receipt">download reciept</Menu.Item>
          </Menu>
        );
        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <span className="cursor-pointer">...</span>
          </Dropdown>
        );
      },
    },
  ];
  return (
    <div className="w-full mt-2 p-3 flex flex-col space-y-3">
      <p>Member</p>
      <div className="flex items-center justify-between w-full">
        <Select placeholder="Status" id="select" className="!w-[10rem]" />
        <div className="flex justify-end w-full cursor-pointer space-x-5">
          <button className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case">
            + Add Member
          </button>
          <span className="flex items-center rounded-[5px] border border-[#B8C9C9] p-[1%] justify-self-end self-end">
            <FilterIcon />
            <p className="text-[#202430] text-[16px] font-[500]">filter</p>
          </span>
        </div>
      </div>
      <Table columns={columns} dataSource={data} loading={isLoading} />
      <DeatilsDrawe Open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Contractor;
