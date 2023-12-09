"use client";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import { useState, useEffect } from "react";
import InvoiceTab from "./InvoiceTab";
import { useRouter } from "next/navigation";
import { useLazyInvoiceStatusQuery } from "@/services/invoiceService";
const options = [
  { value: "monthly", label: "Month" },
  { value: "yearly", label: "Yearly" },
];
const Invoice = () => {
  const [stats, setStats] = useState(options[0].value);
  const [getStats, { isLoading, data }] = useLazyInvoiceStatusQuery();
  const { push } = useRouter();
  const date = new Date();
  useEffect(() => {
    getStats({ time: stats })
      .unwrap()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stats]);
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-9 my-4">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium"> Invoice </h2>
            <p className="text-sm text-gray-600">
              Showing your Account metrics for{" "}
              {date.toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </span>
          <div className="flex justify-center items-center space-x-5">
            <button
              onClick={() => push("/create-invoice")}
              className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
            >
              + Create Invoice
            </button>
            <Select
              style={{ width: "100%" }}
              options={options}
              placeholder="Show stats Yearly"
              value={stats}
              onSelect={(value: string) => setStats(value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[10%] items-center">
          <span className="bg-white flex flex-col items-center justify-center p-2 rounded-md">
            <p className="text-sm">Total Incoming</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span className="bg-white flex flex-col items-center justify-center p-2 rounded-md">
            <p className="text-sm">Total Outgoing</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span className="bg-white flex flex-col items-center justify-center p-2 rounded-md">
            <p className="text-sm"> Overdue Invoice </p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span className="bg-white flex flex-col items-center justify-center p-2 rounded-md">
            <p className="text-sm"> Unpaid</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
        </div>
        <div className="bg-white p-2 rounded-md">
          <InvoiceTab />
        </div>
      </header>
    </div>
  );
};

export default Invoice;
