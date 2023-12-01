"use client";
import { useState } from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";
import CompanyInfo from "./tabs/CompanyInfo";
import OwnerInfo from "./tabs/OwnerInfo";
import BusinessDocs from "./tabs/BusinessDocs";
import Review from "./tabs/Review";
import { useBusinessProfileQuery } from "@/services/authService";
import { useAppSelector } from "@/store/hooks";

export type docsData = {
  Address: string;
  Description: string;
  BusinessIndustry: string;
  TIN: any;
  lga: string;
  state: string;
  phone: string;
};
const OnBoardingTabs = () => {
  // const { data: businessProfile } = useBusinessProfileQuery({});
  const businessProfile = useAppSelector((state) => state.user.business);
  const [formData, setFormData] = useState<docsData>({
    Address: businessProfile?.business?.businessAddress,
    Description: businessProfile?.business?.businessDescription || "",
    BusinessIndustry: businessProfile?.business?.businessIndustry,
    TIN: null,
    lga: "",
    state: "",
    phone: "",
  });
  const [active, setActive] = useState("1");
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <span onClick={() => setActive("1")} className="text-inherit">
          Company information
        </span>
      ),
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
      label: (
        <span onClick={() => setActive("2")} className="text-inherit">
          Owner information
        </span>
      ),
      children: <OwnerInfo setActive={setActive} />,
    },
    {
      key: "3",
      label: (
        <span onClick={() => setActive("3")} className="text-inherit">
          Business Documentation
        </span>
      ),
      children: (
        <BusinessDocs
          setActive={setActive}
          setFormData={setFormData}
          formData={formData}
        />
      ),
    },
    {
      key: "4",
      label: (
        <span onClick={() => setActive("4")} className="text-inherit">
          Review
        </span>
      ),
      children: (
        <Review
          setActive={setActive}
          setFormData={setFormData}
          formData={formData}
        />
      ),
    },
  ];
  // const individualitems: TabsProps["items"] = [
  //   {
  //     key: "1",
  //     label: (
  //       <span onClick={() => setActive("1")} className="text-inherit">
  //         Company information
  //       </span>
  //     ),
  //     children: (
  //       <CompanyInfo
  //         setActive={setActive}
  //         setFormData={setFormData}
  //         formData={formData}
  //       />
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <span onClick={() => setActive("2")} className="text-inherit">
  //         Owner information
  //       </span>
  //     ),
  //     children: <OwnerInfo />,
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <span onClick={() => setActive("3")} className="text-inherit">
  //         Review
  //       </span>
  //     ),
  //     children: <Review />,
  //   },
  // ];
  return (
    <Tabs items={items} defaultActiveKey="1" activeKey={active} />
    // <Tabs
    //   items={
    //     businessProfile?.business?.merchantType === "individual"
    //       ? individualitems
    //       : items
    //   }
    //   defaultActiveKey="1"
    //   activeKey={active}
    // />
  );
};

export default OnBoardingTabs;
