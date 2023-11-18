// InvoiceTab.js
"use client"
import React, { useState, useEffect } from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import InvoiceTable from "./InvoiceTable";

export interface DataType {
  id: string;
  issuieddate: string;
  duedate: string;
  amount: number;
  client: string;
  invoiveno: string;
  status: string;
}

const InvoiceTab = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://testapi.io/api/omobolaji1/invoice")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleTabChange = (key: any) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "recent",
      label: "Recent Invoice",
      children: <InvoiceTable data={data} status="paid" />,
    },
    {
      key: "incoming",
      label: "Incoming",
      children: <InvoiceTable data={data} status="all" />,
    },
    {
      key: "outgoing",
      label: "Outgoing",
      children: <InvoiceTable data={data} status="all" />,
    },
    {
      key: "overdue",
      label: "Overdue",
      children: <InvoiceTable data={data} status="overdue" />,
    },
    {
      key: "canceled",
      label: "canceled",
      children: <InvoiceTable data={data} status="canceled" />,
    },
    {
      key: "draft",
      label: "Draft",
      children: <InvoiceTable data={data} status="draft" />,
    },
  ];

  return (
    <>
      <Tabs
        items={items}
        defaultActiveKey="recent"
        onChange={handleTabChange}
      />
    </>
  );
};

export default InvoiceTab;
