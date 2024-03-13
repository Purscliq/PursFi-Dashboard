"use client";

import React, { useState } from "react";
import DetailsTab from "./DetailsTab";
import DeletePayrollModal from "../settings-tabs/DeletePayrollModal";
import RunPayrollModal from "../settings-tabs/RunPayrollModal";

const PayrollDetails = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRunModal, setOpenRunModal] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunClick = () => {
    setIsRunning(!isRunning);
  };

  return (
    <section className="max-w-[1640px] flex flex-col p-4 gap-6 h-screen overflow-y-scroll bg-[#FAFAFA]">
      <header className="md:flex justify-between items-center space-y-3 md:space-y-0">
        <span>
          <p className="text-[32px] text-[#061A14] font-bold">
            Payroll Details
          </p>
          <p className="font-normal text-[14px] text-[#84818A]">
            Showing your Account metrics for July 19, 2021 - July 25, 2021
          </p>
        </span>
        <span className="flex gap-4">
          <button
            className="px-6 py-3 rounded-md font-medium border border-[#E9EBEB]"
            type="button"
            title="Edit Payroll"
          >
            Edit Payroll
          </button>
          <button
            className="px-6 py-3 rounded-md font-medium bg-black text-white"
            type="button"
            onClick={() => setOpenRunModal(true)}
            title="Run Payroll"
          >
            Run Payroll
          </button>
          {!isRunning && (
            <button
              className="px-6 py-3 rounded-md font-medium bg-[#0D24F1] text-white"
              type="button"
              onClick={handleRunClick}
              title="Start Payroll"
            >
              Start Payroll
            </button>
          )}

          {isRunning && (
            <button
              className="px-6 py-3 rounded-md font-medium bg-[#F6513B] text-white"
              type="button"
              onClick={() => setOpenDeleteModal(true)}
              title="End Payroll"
            >
              End Payroll
            </button>
          )}
          {/* <button
            className="px-6 py-3 rounded-md font-medium bg-[#0D24F1] text-white"
            type="button"
            title="Start Payroll"
          >
            Start Payroll
          </button>
          <button
            className="px-6 py-3 rounded-md font-medium bg-[#F6513B] text-white"
            type="button"
            onClick={() => setOpenDeleteModal(true)}
            title="End Payroll"
          >
            End Payroll
          </button> */}
        </span>
        <DeletePayrollModal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
        />
        <RunPayrollModal open={openRunModal} setOpen={setOpenRunModal} />
      </header>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#181336]">
          <span className="bg-white rounded-[4px] py-4 px-6 flex flex-col justify-between gap-6">
            <p className="text-base">Total Member</p>
            <p className="text-[30px] font-semibold">62</p>
          </span>
          <span className="bg-white rounded-[4px] py-4 px-6 flex flex-col justify-between gap-6">
            <p className="text-base">Gross Amount</p>
            <p className="text-[30px] font-semibold">N5,600,434.00</p>
          </span>
          <span className="bg-white rounded-[4px] py-4 px-6 flex flex-col justify-between gap-6">
            <p className="text-base">Total Deduction Amount</p>
            <p className="text-[30px] font-semibold">N300,000.00</p>
          </span>
          <span className="bg-white rounded-[4px] py-4 px-6 flex flex-col justify-between gap-6">
            <p className="text-base">Total net paid</p>
            <p className="text-[30px] font-semibold">N5,300,434.00</p>
          </span>
        </div>
        <div>
          <DetailsTab />
        </div>
      </div>
    </section>
  );
};

export default PayrollDetails;
