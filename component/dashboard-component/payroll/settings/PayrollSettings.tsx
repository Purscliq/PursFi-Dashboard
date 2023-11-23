"use client";
import { useState } from "react";
import SettingsTabs from "./settings-tabs/SettingsTabs";

const PayrollSettings = () => {
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll space-y-8">
      <header className="flex flex-col space-y-3 my-1">
        <div className="flex items-center justify-between ">
          <span>
            <h2 className="text-2xl font-medium">
              Payroll - <span className="text-gray-400">Setting</span>{" "}
            </h2>
          </span>
        </div>
      </header>
      <SettingsTabs />
      {/* <AdmistrationModal open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default PayrollSettings;
