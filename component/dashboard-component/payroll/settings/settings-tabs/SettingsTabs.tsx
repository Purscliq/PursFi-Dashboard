import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import { useState } from "react";
import PayrollSetup from "./PayrollSetup";
import PayrollStructure from "./PayrollStructure";

const SettingsTabs = () => {
  const [activeKey, setActiveKey] = useState(1);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Payroll Setup",
      children: <PayrollSetup />,
    },
    {
      key: "2",
      label: "Salary Structure",
      children: <PayrollStructure />,
    },
  ];
  return <Tabs items={items} />;
};

export default SettingsTabs;
