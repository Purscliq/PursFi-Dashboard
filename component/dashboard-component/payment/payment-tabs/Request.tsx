"use client";
import { useState, useEffect } from "react";
import { useDisbursementTransactionsMutation } from "@/services/transactionService";
import { useAppSelector } from "@/store/hooks";
import { CustomTable as Table } from "@/lib/AntdComponents";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import TableIcon from "@/assets/icon/TableIcon";
interface TableParams {
  pagination?: TablePaginationConfig;
}
const Request = () => {
  const [refetch, { isLoading, data }] = useDisbursementTransactionsMutation();
  const profile = useAppSelector((store) => store.user.user);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns: ColumnsType<any> = [
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
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
        <span className="flex items-center uppercase space-x-2">
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
        <span className="flex items-center uppercase space-x-2">
          <p>Payment memo</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "phone",
      render: (phone) => `${phone}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Type</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "status",
      render: (status) => `${status}`,
      width: "10%",
    },

    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Amount</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "driver",
      render: (driver) => <span></span>,
      width: "5%",
      fixed: "right",
    },
    {
      title: (
        <span className="flex items-center uppercase space-x-2">
          <p>Action</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "id",
      render: (id) => (
        <span
          className="text-[14px] font-[600] solid-action-btn"
        >
          ...
        </span>
      ),
      width: "10%",
      fixed: "right",
    },
  ];
  useEffect(() => {
    if (profile.id)
      refetch({
        userId: profile?.id,
        businessId: profile?.businessId,
        page: tableParams.pagination?.current,
        filterBy: "instant_payment",
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
  }, [JSON.stringify(tableParams), profile]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
  };
  return (
    <section className="">
      <div className="flex flex-col gap-[1rem] bg-white py-[1%]">
        <span className="text-[#000000] text-[18px] font-[600]">
          Request Attention
        </span>
        <Table
          columns={columns}
          //   rowKey={(record) => record.login.uuid}
          dataSource={data?.data?.data}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
        />
      </div>
    </section>
  );
};

export default Request;
