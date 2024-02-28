import React from "react";

const Details = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4 h-screen overflow-y-scroll space-y-8 bg-[#FAFAFA]">
      <span>
        <h2 className="text-[32px] text-[#061A14] font-bold">
          Payroll Details
        </h2>
        <p className="font-normal text-[14px] text-[#84818A]">
          Showing your Account metrics for July 19, 2021 - July 25, 2021
        </p>
      </span>
    </section>
  );
};

export default Details;
