"use client";
import { useMemo } from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";
import CompanyInfo from "./tabs/CompanyInfo";
import OwnerInfo from "./tabs/OwnerInfo";
import BusinessDocs from "./tabs/BusinessDocs";
import Review from "./tabs/Review";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Company information",
    children: <CompanyInfo />,
  },
  {
    key: "2",
    label: "Owner information",
    children: <OwnerInfo />,
  },
  {
    key: "3",
    label: "Business Documentation",
    children: <BusinessDocs />,
  },
  {
    key: "4",
    label: "Review",
    children: <Review />,
  },
];
const OnBoarding = () => {
  return <Tabs items={items} onChange={onChange} defaultActiveKey="1" />;
};

export default OnBoarding;
