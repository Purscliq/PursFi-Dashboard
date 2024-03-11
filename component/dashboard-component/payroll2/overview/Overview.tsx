"use client";
import { TabsProps } from "antd";
import AddIcon from "@/assets/icon/AddIcon";
import {
  CustomButton as Button,
  CustomTabs as Tabs,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import OverviewTable from "./OverviewTable";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PayrollTable from "./PayrollTable";
import OverviewChart from "./OverviewChart";

const Overview = () => {
  const { push } = useRouter();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <h2>Total Members</h2>,
      children: <OverviewTable />,
    },
    {
      key: "2",
      label: <h2>Payroll</h2>,
      children: <PayrollTable />,
    },
  ];
  return (
    <section className="max-w-[1640px] flex flex-col p-4 h-screen overflow-y-scroll space-y-8 bg-[#FAFAFA]">
      <span className="md:flex justify-between gap-4 space-y-2 md:space-y-0">
        <span className="space-y-1">
          <h2 className="text-[32px] text-[#061A14] font-bold">Payroll</h2>
          <p className="font-normal text-[14px] text-[#84818A]">
            Showing your Account metrics for July 19, 2021 - July 25, 2021
          </p>
        </span>
        <span className="flex gap-2 p-2 bg-white rounded-md h-max">
          <p className="py-1 text-[#84818A]">Show stats:</p>
          <Select
            variant="borderless"
            defaultValue="Yearly"
            options={[
              { value: "Weekly", label: "Weekly" },
              { value: "Monthly", label: "Montly" },
              { value: "Yearly", label: "Yearly" },
            ]}
          />
        </span>
      </span>
      <div className="grid md:grid-cols-7 grid-cols-1 gap-6">
        {/* chart */}
        <div className="bg-white rounded-md p-4 md:col-span-5 flex flex-col gap-4">
          <div className="md:flex justify-between gap-4 space-y-3 md:space-y-0">
            <div className="flex flex-col gap-4 justify-between">
              <span className="space-y-0.5">
                <p className="text-base text-[#181336] font-bold">
                  Overall Payroll
                </p>
                <p className="font-normal text-[12px] text-[#84818A]">
                  Here’s we show data about your effective monthly Payroll
                </p>
              </span>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <div className="w-[7px] h-[7px] bg-black rounded-full mt-1.5" />
                  <p className="text-[#515B6F] text-[12px]">Total Payment</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-[7px] h-[7px] bg-[#D4EBEB] rounded-full mt-1.5" />
                  <p className="text-[#515B6F] text-[12px]">Deduction Amount</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 justify-between p-2 rounded-md border border-[#B8C9C9]">
              <p className="text-[14px] text-[#515B6F]">Overall Payroll</p>
              <p className="text-[22px] text-[#181336] font-semibold">
                N50,600,434.00
              </p>
            </div>
          </div>
          <div>
            <OverviewChart />
          </div>
        </div>
        {/* upcoming */}
        <div className="md:col-span-2 flex flex-col gap-4 bg-white rounded-md p-4">
          <p className="text-base text-[#181336] font-semibold">
            Upcoming Monthly Payroll
          </p>
          <span className="flex flex-col gap-3 justify-between p-3 rounded-md  bg-[#FAFAFA]">
            <p className="text-[14px] text-[#515B6F]">Next Payroll</p>
            <p className="text-[25px] text-[#181336] font-semibold">
              N5,600,434.00
            </p>
          </span>
          <span className="flex flex-col gap-3 justify-between p-3 rounded-md  border border-[#B8C9C9]">
            <span className="flex gap-4 justify-between">
              <p className="text-[14px] text-[#515B6F]">Payroll Fee</p>
              <p className="text-[12px] text-[#181336] font-semibold">
                N10,000.00
              </p>
            </span>
            <span className="flex gap-4 justify-between">
              <p className="text-[14px] text-[#515B6F]">Run Date</p>
              <p className="text-[12px] text-[#181336] font-semibold">
                25, Dec, 2023
              </p>
            </span>
            <span className="flex gap-4 justify-between">
              <p className="text-[14px] text-[#515B6F]">People</p>
              <p className="text-[12px] text-[#181336] font-semibold">62</p>
            </span>
          </span>
          <button className="text-[16px] text-black font-semibold p-3 rounded-md border border-[#B8C9C9]">
            View Details
          </button>
        </div>
        {/* <button
          // onClick={() => setIsModalOpen(true)}
          className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
        >
          + Run Payroll
        </button> */}
      </div>
      <Tabs items={items} defaultActiveKey="1" />
    </section>
  );
};

export default Overview;
