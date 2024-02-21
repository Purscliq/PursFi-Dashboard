"use client";
import React from "react";
import {
  CustomTable as Table,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import MoreIcon from "@/assets/icon/MoreIcon";
import FilterIcon from "@/assets/icon/FilterIcon";

const TransactionHistoryTable = () => {
  const columns = [
    {
      title: "Date",
      sorter: true,
    },
    {
      title: "Type of service",
      sorter: true,
    },
    {
      title: "Product",
      sorter: true,
    },
    {
      title: "Status",
      sorter: true,
    },
    {
      title: "Amount",
      sorter: true,
    },

    {
      title: "Action",
      render: () => {
        return (
          <span className="cursor-pointer">
            <MoreIcon />
          </span>
        );
      },
    },
  ];
  return (
    <div className="bg-white flex flex-col gap-[1rem] py-6 px-4">
      <p className="font-semibold text-[18px]">Transaction History</p>

      <div className="flex justify-between">
        <span className="flex gap-4 py-2">
          <Select
            // style={{ width: 120 }}
            options={[
              { value: "Service1", label: "Service1" },
              { value: "Service2", label: "Service2" },
            ]}
            className="w-fit"
            placeholder="Service"
          />
          <Select
            // style={{ width: 120 }}
            options={[
              { value: "Status1", label: "Status1" },
              { value: "Status2", label: "Status2" },
            ]}
            className="w-fit"
            placeholder="Status"
          />
        </span>
        <button className="flex gap-2 items-center rounded-[5px] border border-[#B8C9C9] p-2 py-0">
          <FilterIcon />
          <p className="text-[#202430] text-[16px] font-[500]">filter</p>
        </button>
      </div>

      <div className="relative overflow-x-auto  sm:rounded-lg w-full">
        <Table columns={columns} dataSource={[]} />
      </div>
    </div>
  );
};

export default TransactionHistoryTable;
