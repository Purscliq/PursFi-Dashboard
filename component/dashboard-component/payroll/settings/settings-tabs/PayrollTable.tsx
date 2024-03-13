"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CustomTable as Table } from "@/lib/AntdComponents";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import DeletePayrollModal from "./DeletePayrollModal";

interface DataType {
  key: string;
  payrollTitle: string;
  people: string;
  status: string;
  amount: string;
}

const data: DataType[] = [
  {
    key: "1",
    payrollTitle: "Volt-Wolf Salary",
    people: "62",
    status: "Auto-running on Dec 25",
    amount: "N44,345.00",
  },
  {
    key: "2",
    payrollTitle: "Purscliq Salary",
    people: "62",
    status: "Auto-running on Dec 25",
    amount: "N44,345.00",
  },
  {
    key: "3",
    payrollTitle: "Lazynerd Salary",
    people: "62",
    status: "Auto-running on Dec 25",
    amount: "N44,345.00",
  },
  {
    key: "4",
    payrollTitle: "Jade and brogues Salary",
    people: "62",
    status: "Auto-running on Dec 25",
    amount: "N44,345.00",
  },
];

const PayrollTable = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/payroll-settings/payroll-details" className="font-medium">
          View Payroll
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="#" className="font-medium">
          View Members
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <button
          type="button"
          onClick={() => setOpenDeleteModal(true)}
          className="font-medium"
        >
          Delete Payroll
        </button>
      ),
    },
  ];

  const columns = [
    {
      title: "Payroll Title",
      dataIndex: "payrollTitle",
      sorter: true,
      render: (payrollTitle: string) => {
        return <span className="font-medium">{payrollTitle}</span>;
      },
    },
    {
      title: "People",
      dataIndex: "people",
      sorter: true,
      render: (people: string) => {
        return <span className="font-medium">{people}</span>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: true,
      render: (status: string) => {
        return <span className="font-medium">{status}</span>;
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      sorter: true,
      render: (amount: string) => {
        return <span className="font-medium">{amount}</span>;
      },
    },

    {
      title: "Action",
      render: () => {
        return (
          <>
            <Dropdown
              menu={{ items }}
              placement="topRight"
              //           placement="top"
              // placement="bottom"
              // placement="bottomRight"
              //   arrow={{ pointAtCenter: true }}
            >
              <button type="button" className="font-medium">
                ...
              </button>
            </Dropdown>
          </>
        );
      },
    },
  ];
  return (
    <div className="bg-white flex flex-col gap-[1rem] py-3">
      <p className="font-semibold text-[18px]">All payroll</p>

      <div className="relative overflow-x-auto  sm:rounded-lg w-full">
        <Table columns={columns} dataSource={data} />
      </div>
      <DeletePayrollModal open={openDeleteModal} setOpen={setOpenDeleteModal} />
    </div>
  );
};

export default PayrollTable;
