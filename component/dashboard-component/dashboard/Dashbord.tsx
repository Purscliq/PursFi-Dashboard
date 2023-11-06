"use client";
import { Select } from "antd";
import React, { useState } from "react";
import DashboardChart from "./DashboardChart";
import DashboardTable from "./DashboardTable";
import DashboardModal from "./DashboardModal";
import { useGetWalletQuery } from "@/services/walletService";

const Dashbord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useGetWalletQuery({});
  return (
    <div className="mx-auto flex flex-col py-2 px-6 h-screen overflow-y-scroll">
      <header className="flex flex-col md:flex-row justify-between items-center my-6">
        <span>
          <h2 className="text-2xl font-medium"> Dashboard</h2>
          <p className="text-sm text-gray-600">
            Showing your Account metrics for July 19, 2021 - July 25, 2021
          </p>
        </span>
        <div className="flex justify-center items-center space-x-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
          >
            {" "}
            + AddFund
          </button>
          <Select
            style={{ width: "100%" }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
            ]}
            placeholder="Show stats Yearly"
          />{" "}
        </div>
      </header>{" "}
      <main className="grid grid-cols-1 md:grid-cols-[1fr,400px] gap-6">
        <section className="flex flex-col space-y-5 ">
          <article className="flex items-center space-x-4 ">
            <div className="p-4 bg-black text-white w-full rounded-md">
              <div className="flex items-center justify-between">
                <p>Account Balance</p>
                <span>
                  <p>5.6%</p>
                </span>
              </div>
              <p className="text-2xl font-semibold">
                N{data?.wallet?.walletBalance}
              </p>
            </div>
            <div className="p-3 text-black w-full rounded-md border border-gray-300">
              <div className="flex items-center justify-between">
                <p>Today, january 2023</p>
                <span>
                  <p>5.6%</p>
                </span>
              </div>
              <p className="text-2xl font-semibold">N566,434,345.00</p>
            </div>
          </article>
          <div className="my-4">
            <DashboardChart />
          </div>
          <DashboardTable />
        </section>
        <section className="flex flex-col space-y-4">
          <div className="p-3 space-y-2">
            <p>Payment that need Attention</p>
            <div className="flex items-center justify-between">
              <span>
                <p className="text-gray-500 text-sm">Today payments</p>
                <p className="text-xl font-semibold">10</p>
              </span>
              <span>
                <p className="text-gray-500 text-sm">Older payments</p>
                <p className="text-xl font-semibold">10</p>
              </span>
            </div>
            <p className="text-gray-500 text-sm underline">
              Respond to Payment{" "}
            </p>
          </div>
          <div className=" border-b border-b-gray-400 px-2">
            <span className="flex justify-between">
              <p className="text-xl font-semibold">Upcoming Payment</p>
              <p>Total</p>
            </span>
            <span className="flex justify-between">
              <p className="text-xl font-semibold">10</p>
              <p className="text-xl font-semibold">3,5059,340</p>
            </span>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="flex space-x-3">
              <p>schedule Payment</p>
              <p>20</p>
            </span>
            <p>view all</p>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="flex space-x-3">
              <p>schedule Payment</p>
              <p>20</p>
            </span>
            <p>view all</p>
          </div>
          <p className="text-gray-500 underline">view all payment</p>
          <div className="space-y-3 p-2">
            <div className="flex justify-between items-center">
              <span>
                <p>Cash Inflow</p>
                <p className="text-xl font-semibold">N434,345.00</p>
              </span>
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
                <div className="bg-[#31CFD5] h-3 w-3 rounded-full" />
                <p>Flutterwave</p>
                <p className="text-2xl font-semibold">N200,000,00</p>
              </div>
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-[#31CFD5] h-3 w-3 rounded-full" />
                <p>Education</p>
                <p className="text-2xl font-semibold">N200,000,00</p>
              </div>
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-[#31CFD5] h-3 w-3 rounded-full" />
                <p>Paystack</p>
                <p className="text-2xl font-semibold">N200,000,00</p>
              </div>
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-[#31CFD5] h-3 w-3 rounded-full" />
                <p>Others</p>
                <p className="text-2xl font-semibold">N200,000,00</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-2">
            <div className="flex justify-between items-center">
              <span>
                <p>Cash Outflow</p>
                <p className="text-xl font-semibold">N234,345.00</p>
              </span>
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
                <p className="text-2xl font-semibold">N200,000,00</p>
              </div>
              <div className="p-3 border border-gray-300  rounded-md space-y-1">
                <div className="bg-red-500 h-3 w-3 rounded-full" />
                <p>Others</p>
                <p className="text-2xl font-semibold">N200,000,00</p>
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
