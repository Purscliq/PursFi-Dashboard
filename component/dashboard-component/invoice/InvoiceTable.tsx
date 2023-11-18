"use client"
import { Input, Table } from "antd";
import { DataType } from "./InvoiceTab";
import { ColumnsType } from "antd/es/table";
import FilterIcon from "@/assets/icon/FilterIcon";
import { CustomDatePicker as DatePicker } from "@/lib/AntdComponents";

interface Props {
  data: DataType[];
  status: string;
}

const InvoiceTable = ({ data, status }: Props) => {
  // Filter the data based on the selected status, or show all data if status is "all"
  const filteredData =
    status === "all"
      ? data
      : data.filter(
          (item) => item.status.toLowerCase() === status.toLowerCase()
        );
  const columns: ColumnsType<DataType> = [
    {
      title: "Client Name",
      dataIndex: "client",
      key: "client",
      render: (text: string, record: DataType) => (
        <>
          <h1 className="font-semibold">{text}</h1>
          <p>Invoice no:{record.invoiveno}</p>
        </>
      ),
    },
    {
      title: "Issued Date",
      dataIndex: "issuieddate",
      key: "issuieddate",
    },
    {
      title: "Due Date",
      dataIndex: "duedate",
      key: "duedate",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => `N${amount}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => {
        let statusClasses = "";

        switch (text.toLowerCase()) {
          case "unpaid":
            statusClasses = "text-blue-400 bg-blue-200";
            break;
          case "paid":
            statusClasses = "text-green-400 bg-green-200";
            break;
          case "overdue":
            statusClasses = "text-red-400 bg-red-200";
            break;
          case "canceled":
            statusClasses = "text-gray-400 bg-gray-200";
            break;
          case "draft":
            statusClasses = "text-gray-400 bg-gray-200";
            break;
          default:
            break;
        }

        return (
          <span
            className={`  text-center text-[14px] font-[600] px-3 py-1 rounded-[80px] ${statusClasses}`}
          >
            {text}
          </span>
        );
      },
    },
  ];

  return (
    <div className="bg-white flex flex-col gap-[0.5rem] space-y-3">
      <div className="flex items-center justify-start w-full gap-[1rem]">
        <DatePicker className="h-fit w-fit" placeholder="Start Date" />
        <DatePicker className="h-fit w-fit" placeholder="End Date" />
        <div className="w-fit">
          <Input className="h-fit w-fit" placeholder="Amount" />
        </div>
        <div className="w-fit">
          <Input className="h-fit w-fit" placeholder="Status" />
        </div>
        <div className="flex justify-end w-full cursor-pointer">
          <span className="flex items-center rounded-[5px] border border-[#B8C9C9] p-[1%] justify-self-end self-end">
            <FilterIcon />
            <p className="text-[#202430] text-[16px] font-[500]">filter</p>
          </span>
        </div>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg w-[22rem] md:w-full">
        <Table dataSource={filteredData} columns={columns} />
      </div>
    </div>
  );
};

export default InvoiceTable;
