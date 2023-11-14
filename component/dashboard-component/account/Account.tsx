"use client";
import { Select } from "antd";
import React, { useState } from "react";
import AccountChart from "./AccountChart";
import { BiLinkAlt } from "react-icons/bi";
import AccountTable from "./AccountTable";
import { IoIosSettings } from "react-icons/io";
import FundModal from "./modal/FundModal";
import MoveFundModal from "./modal/MoveFundModal";
import StatementModal from "./modal/StatementModal";
import SettingModal from "./modal/SettingModal";
import SubAccount from "./modal/SubAccount";
import { useAppSelector } from "@/store/hooks";
import { useGetWalletQuery } from "@/services/walletService";
const Account = () => {
  const [isFundModalOpen, setIsFundModalOpen] = useState(false);
  const [isMoveFundModalOpen, setIsMoveFundModalOpen] = useState(false);
  const [isStatementModalOpen, setIsStatementModalOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const wallet = useAppSelector((store) => store.user.wallet);
  const date = new Date();
  useGetWalletQuery({});
  return (
    <div className="mx-auto flex flex-col py-2 px-6 h-screen overflow-y-scroll">
      <header className="flex flex-col space-y-6 my-6">
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
          <div className="flex justify-center items-center space-x-5">
            <button
              onClick={() => setIsSubModalOpen(true)}
              className="btn btn-md  bg-black hover:bg-black text-white text-sm normal-case"
            >
              {" "}
              + Add sub account
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
        <div className="flex items-center justify-between">
          <p className="text-md text-gray-800">
            Pursliq limited current account
          </p>
          <button className="btn btn-md border flex items-center bg-transparent border-black text-sm normal-case">
            Share payment link
            <BiLinkAlt />
          </button>
        </div>
      </header>{" "}
      <main className="grid grid-cols-1 gap-4">
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-y-0 md:gap-x-24 gap-y-10 ">
          <article>
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
              <div className="p-3 text-black w-full rounded-md border border-gray-300">
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
                <p className="text-2xl font-semibold">N566,434,345.00</p>
              </div>
            </div>
            <div className="my-4">
              <AccountChart />
            </div>
          </article>
          <div className="p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="w-full">
                <p>Spend so far</p>{" "}
                <p className="text-2xl font-semibold">N56,434.00</p>
              </span>
              <div className="flex justify-between w-full">
                <span>
                  <p>Burn</p> <p className="text-2xl font-semibold">%10</p>
                </span>
                <p>5.0%</p>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-end items-end mb-3">
                <button className="text-lg font-semibold">+ copy</button>
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
            <div className="flex justify-between items-center">
              <button
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
              </button>
              <button
                onClick={() => setIsStatementModalOpen(true)}
                className=" font-semibold"
              >
                + Statement
              </button>
              <button
                onClick={() => setIsSettingModalOpen(true)}
                className="flex items-center font-semibold"
              >
                <IoIosSettings /> Setting
              </button>
            </div>
          </div>{" "}
        </section>
        <AccountTable />
      </main>
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
