"use client";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import React, { useState } from "react";
import DashboardChart from "./DashboardChart";
import DashboardTable from "./DashboardTable";
import DashboardModal from "./DashboardModal";
import { useGetWalletQuery } from "@/services/walletService";
import Arrowleft from "@/assets/icon/Arrowleft";
import { MdArrowOutward } from "react-icons/md";
import { FiArrowDownLeft } from "react-icons/fi";
import Link from "next/link";
import { useGetWalletHistoryQuery } from "@/services/walletService";
import {
  useGetExpensesQuery,
  useGetTransactionStatusQuery,
} from "@/services/transactionService";

const Dashbord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetWalletQuery({});
  const { data: stats } = useGetWalletHistoryQuery({});
  const { data: analysis } = useGetExpensesQuery({});
  const { data: status } = useGetTransactionStatusQuery("");
  const date = new Date();
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col md:flex-row justify-between items-center mt-8">
        <span>
          <h2 className="text-2xl font-medium"> Dashboard</h2>
          <p className="text-sm text-gray-600">
            Showing your Account metrics for{" "}
            {date.toLocaleString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </span>
        <div className="flex justify-center items-center space-x-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
          >
            + Add Fund
          </button>
          <Select
            className="!w-full"
            options={[
              { value: "1 month", label: "1 month" },
              { value: "2 month", label: "2 month" },
            ]}
            placeholder="Show stats Yearly"
          />
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-[55%_43%] gap-[2%] mt-8">
        <section className="flex flex-col space-y-10 ">
          <article className="flex items-stretch space-x-4 bg-white p-[2%]">
            <div className="p-4 bg-black text-white w-full rounded-md">
              {/* <div className="flex itemscenter justify-between"> */}
              <p>Account Balance</p>
              {/* <span className="flex items-center">
                  <p>5.6%</p> <Arrowleft className=" p-2 rounded !text-white" />
                </span> */}
              {/* </div> */}
              <p className="text-2xl font-semibold">
                N{Number(data?.wallet?.walletBalance).toLocaleString("en-US")}
              </p>
            </div>
            <div className="bg-white p-3 text-black w-full rounded-md border border-gray-300">
              <div className="flex items-center justify-between">
                <p>
                  Today, {date.toLocaleString("en-US", { month: "long" })}{" "}
                  {date.getFullYear()}
                </p>
                <span>{/* <p>5.6%</p> */}</span>
              </div>
              <p className="text-2xl font-semibold">
                N{Number(analysis?.data?.todayBalance).toLocaleString("en-US")}
              </p>
            </div>
          </article>
          <div className="my-4 bg-white p-[2%]">
            <DashboardChart data={stats || []} />
          </div>
          <DashboardTable />
        </section>
        <section className="flex flex-col space-y-10">
          <div className="space-y-2 bg-white p-[2%]">
            <p>Payment that need Attention</p>
            <div className="flex items-center justify-between">
              <span>
                <p className="text-gray-500 text-sm">Today payments</p>
                <p className="text-xl font-semibold">
                  {status?.data?.todayPayment}
                </p>
              </span>
              <span>
                <p className="text-gray-500 text-sm">Older payments</p>
                <p className="text-xl font-semibold">10</p>
              </span>
            </div>
            <Link href="/payment" className="text-gray-500 text-sm underline">
              Respond to Payment{" "}
            </Link>
          </div>
          <div className="bg-white p-[2%] border-b border-b-gray-400 px-2">
            <span className="flex justify-between">
              <p className="text-xl font-semibold">Upcoming Payment</p>
              <p>Total</p>
            </span>
            <span className="flex justify-between">
              <p className="text-xl font-semibold">
                {status?.data?.upcomingPaymentCount}
              </p>
              <p className="text-xl font-semibold">
                N
                {Number(status?.data?.totalUpcomingPayment).toLocaleString(
                  "en-US"
                )}
              </p>
            </span>
          </div>
          <div className="flex justify-between items-center px-2 ">
            <span className="flex space-x-3">
              <p>schedule Payment</p>
              <p>{status?.data?.schedulePaymentLength}</p>
            </span>
            <p>view all</p>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="flex space-x-3">
              <p>recurring Payment</p>
              <p>{status?.data?.recurringPaymentLength}</p>
            </span>
            <p>view all</p>
          </div>
          <Link href="/payment" className="text-gray-500 text-sm underline">
            view all payment
          </Link>
          <div className="space-y-3 p-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="flex items-center space-x-3">
                  {" "}
                  <MdArrowOutward size={20} className="text-[#31CFD5]" />
                  <p>Cash Inflow</p>
                </span>
                <p className="text-xl font-semibold">
                  N{Number(status?.data?.cashInflow).toLocaleString("en-US")}
                </p>
              </div>
              <Select
                style={{ width: "50%" }}
                options={[
                  { value: "2 months", label: "2 months" },
                  { value: "3 months", label: "3 months" },
                  { value: "4-5 months", label: "4-5 months" },
                ]}
                placeholder="1 Months"
              />{" "}
            </div>
            <p className="text-gray-400 text-sm text-center">
              you can check where your money come and go here
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-[#31CFD5] h-3 w-3 rounded-full" />
                <p>Invoice</p>
                <p className="text-2xl font-semibold">
                  N{Number(status?.data?.invoice).toLocaleString("en-US")}
                </p>
              </div>
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-[#31CFD5] h-3 w-3 rounded-full" />
                <p>Others</p>
                <p className="text-2xl font-semibold">
                  N
                  {Number(status?.data?.otherCollection).toLocaleString(
                    "en-US"
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="flex items-center space-x-3">
                  <FiArrowDownLeft size={20} className="text-red-500" />
                  <p>Cash Outflow</p>
                </span>
                <p className="text-xl font-semibold">
                  N{Number(status?.data?.cashOutflow).toLocaleString("en-US")}
                </p>
              </div>
              <Select
                style={{ width: "50%" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                ]}
                placeholder="1 Months"
              />{" "}
            </div>
            <p className="text-gray-400 text-sm text-center">
              you can check where your money come and go here
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-red-500 h-3 w-3 rounded-full" />
                <p>Payroll</p>
                <p className="text-2xl font-semibold">
                  N{Number(status?.data?.payroll).toLocaleString("en-US")}
                </p>
              </div>
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-red-500 h-3 w-3 rounded-full" />
                <p>Payment</p>
                <p className="text-2xl font-semibold">
                  N
                  {Number(status?.data?.otherDisbursment).toLocaleString(
                    "en-US"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <DashboardModal open={isModalOpen} setOpen={setIsModalOpen} />
      </main>
    </div>
  );
};

export default Dashbord;
