"use client";

import { CustomTable as Table } from "@/lib/AntdComponents";
import type { TableColumnsType, TableProps } from "antd";
import Sarah from "@/assets/sarah-brown.png";
import Image from "next/image";

interface DataType {
  key: React.Key;
  name: string;
  email: string;
  role: string;
}

const data: DataType[] = [
  {
    key: "1",
    name: "Samuel woodfree",
    email: "yourmail.com",
    role: "operation manager",
  },
  {
    key: "2",
    name: "Samuel woodfree",
    email: "yourmail.com",
    role: "operation manager",
  },
  {
    key: "3",
    name: "Samuel woodfree",
    email: "yourmail.com",
    role: "operation manager",
  },
  {
    key: "4",
    name: "Samuel woodfree",
    email: "yourmail.com",
    role: "operation manager",
  },
  {
    key: "5",
    name: "Samuel woodfree",
    email: "yourmail.com",
    role: "operation manager",
  },
];

const ContractorTable = () => {
  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      sorter: true,
      render: (name: string, image: Image) => {
        return (
          <span className="flex gap-4">
            <Image src={Sarah} alt="Avatar" className="rounded-full" />
            <span className="text-[#181336] font-medium py-3">{name}</span>
          </span>
        );
      },
    },
    {
      title: "Email Address",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: true,
    },
    {
      title: "Action",
      //  sorter: true,
      render: () => {
        return <span className="cursor-pointer">...</span>;
      },
    },
  ];

  return (
    <section className="flex flex-col gap-6 bg-white p-4 mt-6">
      <p className="text-[18px] font-semibold text-black">Team Members</p>

      {/* table */}
      <div className="relative overflow-x-auto  sm:rounded-lg w-full">
        <Table columns={columns} dataSource={data} />
      </div>
    </section>
  );
};

export default ContractorTable;
