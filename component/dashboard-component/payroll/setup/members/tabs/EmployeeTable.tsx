"use client";
import { useEffect, useState } from "react";
import {
  CustomTable as Table,
  CustomSelect as Select,
} from "@/lib/AntdComponents";

const EmployeeTable = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-[2rem] bg-white p-4">
        <p className="text-[18px] font-[600] text-black">Team Members</p>
      </div>
    </section>
  );
};

export default EmployeeTable;
