import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";
import Request from "./payment-tabs/Request";
import Recurring from "./payment-tabs/Recurring";
import ALL from "./payment-tabs/All";

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
const PaymentTabs = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default PaymentTabs;
