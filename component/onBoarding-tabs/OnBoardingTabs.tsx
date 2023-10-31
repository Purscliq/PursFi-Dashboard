"use client";
import { useState, useMemo } from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";
import CompanyInfo from "./tabs/CompanyInfo";
import OwnerInfo from "./tabs/OwnerInfo";
import BusinessDocs from "./tabs/BusinessDocs";
import Review from "./tabs/Review";
import { useBusinessProfileQuery } from "@/services/authService";

const onChange = (key: string) => {
  console.log(key);
};
export type docsData = {
  Address: string;
  Description: string;
  BusinessIndustry: string;
  TIN: any;
};
const OnBoardingTabs = () => {
  const {
    data: { business },
  } = useBusinessProfileQuery({});
  const [formData, setFormData] = useState<docsData>({
    Address: business?.businessAddress,
    Description: business?.businessDescription || "",
    BusinessIndustry: business?.businessIndustry,
    TIN: null,
  });
  const [active, setActive] = useState("1");
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Company information",
      children: (
        <CompanyInfo
          setActive={setActive}
          setFormData={setFormData}
          formData={formData}
        />
      ),
    },
    {
      key: "2",
      label: "Business Documentation",
      children: (
        <BusinessDocs
          setActive={setActive}
          setFormData={setFormData}
          formData={formData}
        />
      ),
    },
    {
      key: "3",
      label: "Owner information",
      children: <OwnerInfo />,
    },
    {
      key: "4",
      label: "Review",
      children: <Review />,
    },
  ];
  const individualitems: TabsProps["items"] = [
    {
      key: "1",
      label: "Company information",
      children: (
        <CompanyInfo
          setActive={setActive}
          setFormData={setFormData}
          formData={formData}
        />
      ),
    },
    {
      key: "2",
      label: "Owner information",
      children: <OwnerInfo />,
    },
    {
      key: "3",
      label: "Review",
      children: <Review />,
    },
  ];
  return (
    <Tabs
      items={business?.merchantType === "individual" ? individualitems : items}
      onChange={onChange}
      defaultActiveKey="1"
      activeKey={active}
    />
  );
};

export default OnBoardingTabs;
