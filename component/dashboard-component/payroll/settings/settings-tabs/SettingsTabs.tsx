import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import { useState } from "react";
import PayrollSetup from "./PayrollSetup";
import PayrollStructure from "./PayrollStructure";
const day: any = "";
const initialState = {
  automatic: true,
  day: day,
  title: "",
  single: true,
  businessId: "",
  structure: [],
  currency: "NGN",
  hour: "18",
};
export type dataType = typeof initialState;
const SettingsTabs = () => {
  const [activeKey, setActiveKey] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Payroll Setup",
      children: (
        <PayrollSetup
          formData={formData}
          setFormData={setFormData}
          setActiveKey={setActiveKey}
        />
      ),
    },
    {
      key: "2",
      label: "Salary Structure",
      children: (
        <PayrollStructure
          formData={formData}
          setFormData={setFormData}
          setActiveKey={setActiveKey}
          initialState={initialState}
        />
      ),
    },
  ];
  return <Tabs activeKey={activeKey.toString()} items={items} />;
};

export default SettingsTabs;
