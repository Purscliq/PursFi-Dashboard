import { Select } from "antd";
import React from "react";
import DetailsTab from "./DetailsTab";

const Details = ({ id }: { id: string }) => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4 h-screen overflow-y-scroll space-y-4 bg-[#FAFAFA]">
      <header className="flex justify-between items-center">
        <span>
          <p className="text-[32px] text-[#061A14] font-bold">
            Payroll Details
          </p>
          <p className="font-normal text-[14px] text-[#84818A]">
            Showing your Account metrics for July 19, 2021 - July 25, 2021
          </p>
        </span>
        <Select
          className="!w-fit !h-[3rem]"
          options={[
            { value: "1 month", label: "1 month" },
            { value: "2 month", label: "2 month" },
          ]}
          placeholder="Show stats Yearly"
        />
      </header>
      <div className="space-y-4">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#181336]">
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
          <DetailsTab id={id} />
        </div>
      </div>
    </section>
  );
};

export default Details;
