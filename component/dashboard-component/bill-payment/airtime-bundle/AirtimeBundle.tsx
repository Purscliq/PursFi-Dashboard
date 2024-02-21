"use client";
import Airtel from "@/assets/icon/Airtel";
import Glo from "@/assets/icon/Glo";
import Mtn from "@/assets/icon/Mtn";
import NineMobile from "@/assets/icon/NineMobile";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import { useRouter } from "next/navigation";
import TransactionHistoryTable from "./TransactionHistoryTable";

const data = [
  {
    title: "Total airtime sent",
    amount: "N5,000,000.00",
  },
  {
    title: "Total data sent",
    amount: "N600,434.00",
  },
  {
    title: "Total amount",
    amount: "N5,600,434.00",
  },
  {
    title: "Total profit",
    amount: "N700,000.00",
  },
];

const bundle = [
  {
    provider: <Mtn />,
    product: "MTN Airtime and Data bundle",
    totalAirtimeRemaining: "450,000.00",
    totalDataBundleRemaining: "450,000.00",
  },
  {
    provider: <Airtel />,
    product: "Airtel Airtime and Data bundle",
    totalAirtimeRemaining: "450,000.00",
    totalDataBundleRemaining: "450,000.00",
  },
  {
    provider: <Glo />,
    product: "Glo Airtime and Data bundle",
    totalAirtimeRemaining: "450,000.00",
    totalDataBundleRemaining: "450,000.00",
  },
  {
    provider: <NineMobile />,
    product: "9Mobile Airtime and Data bundle",
    totalAirtimeRemaining: "450,000.00",
    totalDataBundleRemaining: "450,000.00",
  },
];

const AirtimeBundle = () => {
  const { push } = useRouter();
  const date = new Date();

  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-6">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-3xl font-bold">
              Payment - {""}
              <span className="text-2xl text-[#515B6F] font-medium">
                Bill payment - {""}
              </span>
              <span className="text-xl text-[#515B6F] font-medium">
                Airtime Bundle
              </span>
            </h2>
            <p className="text-sm text-gray-600">
              Showing your Account metrics for{" "}
              {date.toLocaleString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </span>
          <div className="flex justify-end items-center space-x-5">
            <button
              onClick={() => push("/quick-service")}
              className="btn btn-md border flex items-center bg-[#000] text-sm normal-case text-white hover:bg-[#000]"
            >
              + Quick Service
            </button>
          
            <Select
              className="!w-full !h-[3rem]"
              options={[
                { value: "1 month", label: "1 month" },
                { value: "2 month", label: "2 month" },
              ]}
              placeholder="Show stats Yearly"
            />
          </div>
        </div>
      </header>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#181336]">
        {data.map((item, index) => (
          <span
            key={index}
            className="bg-white rounded-[4px] py-4 px-6 flex flex-col justify-between gap-6"
          >
            <p className="text-base">{item.title}</p>
            <p className="text-[30px] font-semibold">{item.amount}</p>
          </span>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {bundle.map((item, index) => (
          <div
            key={index}
            className="text-black bg-white rounded-[4px] py-4 px-6 space-y-2"
          >
            <div className="md:flex justify-between gap-4 space-y-4 md:space-y-0">
              <span className="flex gap-4">
                {item.provider}
                <p className="text-[18px] pt-4 md:pt-2">{item.product}</p>
              </span>
              <button
                onClick={() => push("/sell-service")}
                className="btn btn-md border-[#E9EBEB] flex items-center bg-white text-[14px] font-medium normal-case text-black hover:bg-[#f2f2f2]"
              >
                + Sell Service
              </button>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* <div className="flex gap-4"> */}
              <span className="bg-[#FAFAFA] rounded-[4px] py-4 px-6 flex flex-col justify-between gap-3">
                <p className="text-[#515B6F] text-[14px]">
                  Total Airtime Remaining
                </p>
                <span className="flex  justify-between gap-4">
                  <p className="text-black font-semibold text-[16px]">
                    {item.totalAirtimeRemaining}
                  </p>
                  <button
                    title="Top up"
                    className="text-[#0D24F1] font-medium text-[12px]"
                  >
                    + Top up
                  </button>
                </span>
              </span>
              <span className="bg-[#FAFAFA] rounded-[4px] py-4 px-6 flex flex-col justify-between gap-3">
                <p className="text-[#515B6F] text-[14px]">
                  Total Data Bundle Remaining
                </p>
                <span className="flex  justify-between gap-4">
                  <p className="text-black font-semibold text-[16px]">
                    {item.totalDataBundleRemaining}
                  </p>
                  <button
                    title="Top up"
                    className="text-[#0D24F1] font-medium text-[12px]"
                  >
                    + Top up
                  </button>
                </span>
              </span>
            </div>
            <span className="flex justify-center">
              <button
                title="View More Details"
                className="underline text-[#515B6F] text-[14px] hover:text-black"
              >
                View More Details
              </button>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <TransactionHistoryTable />
      </div>
    </div>
  );
};

export default AirtimeBundle;
