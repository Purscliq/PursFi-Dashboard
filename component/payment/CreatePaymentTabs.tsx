import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Request Attention",
    children: <Request />,
  },
  {
    key: "2",
    label: "Payment",
    children: <ALL />,
  },
  {
    key: "3",
    label: "Recurring payment",
    children: <Recurring />,
  },
];
const CreatePaymentTabs = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default CreatePaymentTabs;
