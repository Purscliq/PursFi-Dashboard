"use client";
import {
  CustomButton as Button,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import React, { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import AccountTable from "./AccountTable";
import { IoIosSettings } from "react-icons/io";
import FundModal from "./modal/FundModal";
import MoveFundModal from "./modal/MoveFundModal";
import StatementModal from "./modal/StatementModal";
import SettingModal from "./modal/SettingModal";
import SubAccount from "./modal/SubAccount";
import { useAppSelector } from "@/store/hooks";
import {
  useGetWalletHistoryQuery,
  useGetWalletQuery,
} from "@/services/walletService";
import PaymentLink from "./modal/PaymentLink";
import DashboardChart from "../dashboard/DashboardChart";
import { useGetExpensesQuery } from "@/services/transactionService";
const Account = () => {
  const { data: analysis } = useGetExpensesQuery({});
  const [isFundModalOpen, setIsFundModalOpen] = useState(false);
  const [isMoveFundModalOpen, setIsMoveFundModalOpen] = useState(false);
  const [isStatementModalOpen, setIsStatementModalOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [ispaymentOpen, setIspaymentOpen] = useState(false);

  const wallet = useAppSelector((store) => store.user.wallet);
  const date = new Date();
  useGetWalletQuery({});
  const { data: stats } = useGetWalletHistoryQuery({});
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-6 mt-6">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium"> Account </h2>
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
            {/* <button
              onClick={() => setIsSubModalOpen(true)}
              className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
            >
              {" "}
              + Add sub account
            </button> */}
            <button
              onClick={() => setIspaymentOpen(true)}
              className="btn btn-md border flex items-center bg-transparent border-black text-sm normal-case"
            >
              Share payment link
              <BiLinkAlt />
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
        </div>
        {/* <div className="flex items-center justify-between">
          <p className="text-md text-gray-800">
            Pursliq limited current account
          </p>
          
        </div> */}
      </header>{" "}
      <main className="grid grid-cols-1 gap-4">
        <section className="grid grid-cols-1 lg:grid-cols-[55%_43%] gap-[2%] mt-8">
          <article className="bg-white p-[2%]">
            <div className="flex items-stretch space-x-6 ">
              <div className="p-4 bg-black text-white w-full rounded-md">
                <div className="flex items-center justify-between">
                  <p>Account Balance</p>
                  <span>{/* <p>5.6%</p> */}</span>
                </div>
                <p className="text-2xl font-semibold">
                  N{Number(wallet?.walletBalance).toLocaleString("en-US")}
                </p>
              </div>
              <div className="bg-white p-3 text-black w-full rounded-md border border-gray-300">
                <div className="flex items-center justify-between">
                  <p>
                    Today,{" "}
                    {date.toLocaleString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <span>{/* <p>5.6%</p> */}</span>
                </div>
                <p className="text-2xl font-semibold">
                  N
                  {Number(analysis?.data?.todayBalance).toLocaleString("en-US")}
                </p>
              </div>
            </div>
            <div className="my-4">
              <DashboardChart data={stats || []} />
            </div>
          </article>
          <div className="p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center gap-[2rem]">
              <span className="w-full bg-white p-[3%]">
                <p>Spend so far</p>{" "}
                <p className="text-2xl font-semibold">
                  N
                  {Number(analysis?.data?.currentExpenses).toLocaleString(
                    "en-US"
                  )}
                </p>
              </span>
              <div className="w-full p-[3%] bg-white">
                <p>Burn</p>
                <p className="text-2xl font-semibold">
                  %{analysis?.data?.burn}
                </p>
                {/* <p>5.0%</p> */}
              </div>
            </div>
            <div className="flex flex-col space-y-3 bg-white p-[2%]">
              <div className="flex justify-end items-end mb-3">
                <Button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `Bank Name:${wallet?.accountDetails?.bankName} \n Account Name:${wallet?.accountDetails?.accountName} \n Account Number:${wallet?.accountDetails?.accountNumber}`
                    )
                  }
                  className="text-lg font-semibold !border-none"
                >
                  + copy
                </Button>
              </div>{" "}
              <span className="flex justify-between items-center">
                <p className="text-gray-500 ">Bank Name</p>
                <p>{wallet?.accountDetails?.bankName}</p>
              </span>
              <span className="flex justify-between items-center">
                <p className="text-gray-500 ">Account Name</p>
                <p>{wallet?.accountDetails?.accountName}</p>
              </span>
              <span className="flex justify-between items-center">
                <p className="text-gray-500 ">Account Number</p>
                <p>{wallet?.accountDetails?.accountNumber}</p>
              </span>
              <span className="flex justify-between items-center">
                <p className="text-gray-500 ">Account allas</p>
                <p>Purs main account</p>
              </span>
            </div>
            <div className="flex justify-end items-center">
              {/* <button
                onClick={() => setIsFundModalOpen(true)}
                className=" font-semibold"
              >
                + Fund
              </button>
              <button
                onClick={() => setIsMoveFundModalOpen(true)}
                className=" font-semibold"
              >
                + Move Fund
              </button> */}
              <button
                onClick={() => setIsStatementModalOpen(true)}
                className=" font-semibold"
              >
                + Statement
              </button>
              {/* <button
                onClick={() => setIsSettingModalOpen(true)}
                className="flex items-center font-semibold"
              >
                <IoIosSettings /> Setting
              </button> */}
            </div>
          </div>{" "}
        </section>
        <AccountTable />
      </main>
      <PaymentLink open={ispaymentOpen} setOpen={setIspaymentOpen} />
      <FundModal open={isFundModalOpen} setOpen={setIsFundModalOpen} />
      <MoveFundModal
        open={isMoveFundModalOpen}
        setOpen={setIsMoveFundModalOpen}
      />
      <StatementModal
        open={isStatementModalOpen}
        setOpen={setIsStatementModalOpen}
      />
      <SettingModal open={isSettingModalOpen} setOpen={setIsSettingModalOpen} />
      <SubAccount open={isSubModalOpen} setOpen={setIsSubModalOpen} />
    </div>
  );
};

export default Account;
