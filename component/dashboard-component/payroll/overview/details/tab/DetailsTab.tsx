"use client"
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";

const DetailsTab = () => {

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Payroll Setup",
      children: ""
    },
    {
      key: "2",
      label: "Salary Structure",
      children: ""
    },
    {
      key: "3",
      label: "Payroll Notications",
      children: "",
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };

  return <Tabs items={items} onChange={onChange} defaultActiveKey="1 "/>
};

export default DetailsTab
