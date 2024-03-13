import React from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import PayrollDate from "../../setup/basic-details/PayrollDate";
import SalaryStructure from "../../setup/basic-details/SalaryStructure";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Salary Structure",
    children: <SalaryStructure />,
  },
  {
    key: "2",
    label: "Payroll Date",
    children: <PayrollDate />,
  },
];

const DetailsTab = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6">
      <div className="">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default DetailsTab;
