"use client";
import { Select } from "antd";
import React from "react";
import InvoiceTab from "./InvoiceTab";
import { useRouter } from "next/navigation";

const Invoice = () => {
  const { push } = useRouter();
  return (
    <div className="mx-auto flex flex-col py-2 px-6 h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-9 my-4">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium"> Invoice </h2>
            <p className="text-sm text-gray-600">
              Showing your Account metrics for July 19, 2021 - July 25, 2021
            </p>
          </span>
          <div className="flex justify-center items-center space-x-5">
            <button
              onClick={() => push("invoice/create")}
              className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
            >
              + Create Invoice
            </button>
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
              ]}
              placeholder="Show stats Yearly"
            />{" "}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>
            <p className="text-sm">total incoming</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span>
            <p className="text-sm">total outgoing</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span>
            <p className="text-sm"> overdue invoice </p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
          <span>
            <p className="text-sm"> unpaid</p>
            <p className="text-2xl font-medium">N300,000</p>
          </span>
        </div>{" "}
        <InvoiceTab />
      </header>
    </div>
  );
};

export default Invoice;
