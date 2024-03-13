"use client";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { TabsProps } from "antd";
import EmployeeList from "./tab/EmployeeList";
import Contractor from "./tab/Contractor";

const DetailsTab = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Employee List (32)",
      children: <EmployeeList />,
    },
    {
      key: "2",
      label: "Contractor List (0)",
      children: <Contractor />,
    },

    // {
    //   key: "3",
    //   label: "Payroll Notications",
    //   children: "",
    // },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };

  return <Tabs items={items} onChange={onChange} defaultActiveKey="1 " />;
};

export default DetailsTab;
