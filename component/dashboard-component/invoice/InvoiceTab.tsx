// InvoiceTab.js
"use client";
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
  const items: TabsProps["items"] = [
    {
      key: "recent",
      label: "Recent Invoice",
      children: <InvoiceTable status="paid" />,
    },
    {
      key: "incoming",
      label: "Incoming",
      children: <InvoiceTable status="all" />,
    },
    {
      key: "outgoing",
      label: "Outgoing",
      children: <InvoiceTable status="all" />,
    },
    {
      key: "overdue",
      label: "Overdue",
      children: <InvoiceTable status="overdue" />,
    },
    {
      key: "canceled",
      label: "Canceled",
      children: <InvoiceTable status="canceled" />,
    },
    {
      key: "draft",
      label: "Draft",
      children: <InvoiceTable status="draft" />,
    },
  ];

  return (
    <>
      <Tabs items={items} defaultActiveKey="recent" />
    </>
  );
};

export default InvoiceTab;
