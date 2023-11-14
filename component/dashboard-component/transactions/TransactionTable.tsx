"use client";
import { useState, useEffect } from "react";
import { useTransactionsMutation } from "@/services/transactionService";
import {
  CustomTable as Table,
  CustomDatePicker as DatePicker,
  CustomInput as Input,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import TableIcon from "@/assets/icon/TableIcon";
interface TableParams {
  pagination?: TablePaginationConfig;
}
const TransactionTable = () => {
  const [refetch, { isLoading }] = useTransactionsMutation();
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns: ColumnsType<any> = [
    {
      title: (
        <span className="flex items-center">
          <p>Date</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "created_at",
      render: (name) => `${name}`,
      width: "15%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Counterparty</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "account_name",
      render: (email) => `${email}`,
      width: "15%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Transaction memo</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "phone",
      render: (phone) => `${phone}`,
      width: "10%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Status</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "status",
      render: (status) => `${status}`,
      width: "10%",
    },

    {
      title: (
        <span className="flex items-center">
          <p>Streaming</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "driver",
      render: (driver) => (
        <div className="relative mx-auto w-[20px]">
          {driver?.streaming_active ? (
            <span className="animate-ping absolute left-[50%] translate-x-[-50%] inline-flex h-[10px] w-[10px] rounded-full bg-green-400 opacity-75 mx-auto"></span>
          ) : (
            <span className="absolute left-[50%] translate-x-[-50%] inline-flex h-[10px] w-[10px] rounded-full bg-gray-400 opacity-75 mx-auto"></span>
          )}
        </div>
      ),
      width: "5%",
      fixed: "right",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "id",
      render: (id) => (
        <span
          //   onClick={() => push(`dashboard/drivers/${id}`)}
          className="text-[14px] font-[600] solid-action-btn"
        >
          View Details
        </span>
      ),
      width: "10%",
      fixed: "right",
    },
  ];
  useEffect(() => {
    refetch({
      page: tableParams.pagination?.current,
      count: tableParams.pagination?.pageSize,
    })
      .unwrap()
      .then((res) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: res.total,
          },
        });
      })
      .catch();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
  };
  return (
    <section className="">
      <div className="flex flex-col gap-[1rem]">
        <span className="flex items-center justify-start gap-[1rem] ">
          <DatePicker placeholder="Start Date" />
          <DatePicker placeholder="End date" />
          <Input placeholder="Amount" />
        </span>
        <Table />
      </div>
    </section>
  );
};

export default TransactionTable;
