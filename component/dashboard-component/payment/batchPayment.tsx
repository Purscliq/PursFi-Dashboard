"use client";
import {  CustomSelect as Select } from "@/lib/AntdComponents";
import { CustomSteps as Steps } from "@/lib/AntdComponents";
import PaymentTabs from "./PaymentTabs";
import Link from "next/link";
import { useMemo, useState } from "react";
import Done from "@/assets/icon/Done";
import StepIcon from "@/assets/icon/StepIcon";
import Step1 from "./batch-tabs/step1";
import Step2 from "./batch-tabs/step2";
import Step3 from "./batch-tabs/step3";
import StepSuccess from "@/assets/icon/StepSuccess";

export interface DataType {
  key: string;
  accountname: string;
  accountnumber: string;
  bankname: string;
  date: string;
  status: string;
  amount: string;
}

const BatchPayment = () => {
    const [current, setCurrent] = useState<number>(0);
    const [csvData, setCsvData] = useState('');
    const [data, setData] = useState<DataType[]>([]);
    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
    console.log(csvData)
    const steps = useMemo(
        () => [
            {
              title: (
                <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
                  <p className="text-[16px]">Upload CSV</p>
                  <p className="text-[14px]">Step 1/3</p>
                </div>
              ),
              content: <Step1 next={next} setCsvData={setCsvData} />,
              icon:
                current > 0 ? (
                  <StepSuccess className="h-[56px]" />
                  
                ) : (
                  <StepIcon className="h-[56px]" />
                ),
              },
              {
                title: (
                  <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
                    <p className="text-[16px]">Review Transactions</p>
                    <p className="text-[14px]">Step 2/3</p>
                  </div>
                ),
                content: <Step2 next={next} csvData={csvData} data={data} setData={setData}/>,
                icon:
                  current > 1 ? (
                    <StepSuccess className="h-[56px]" />
                  ) : (
                    <StepIcon className="h-[56px]" />
                  ),
              },
              {
                title: (
                  <div className="flex flex-col font-[400] text-[#2A2069] leading-[28.80px]">
                    <p className="text-[16px]">Batch Payment</p>
                    <p className="text-[14px]">Step 3/3</p>
                  </div>
                ),
                content: <Step3 data={data}/>,
                icon:
                  current == 2 ? (
                    <StepSuccess className="h-[56px]" />
                  ) : (
                    <StepIcon className="h-[56px]" />
                  ),
              },
          ],
          [current, data, setData]
    ) 
  const date = new Date();
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <header className="flex flex-col md:flex-row justify-between items-center ">
        <span>
          <h2 className="text-3xl font-bold"> Payment - <span className="text-2xl text-gray-400 font-medium">Batch Payment</span></h2>
          <p className="text-sm text-gray-600">
            Showing your Account metrics for{" "}
            {date.toLocaleString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </span>
        
      </header>
      <div>
      <div className="flex flex-col justify-center items-center bg-white gap-[1rem] p-[1rem] mt-5">
      <div className="flex flex-col justify-between gap-[1.5rem] w-full">
      <Steps size="small" current={current} items={steps} className=" flex items-center"/>
      </div>
      </div>
      <div className="w-full">{steps[current].content}</div>
    </div>
    </div>
  );
};

export default BatchPayment;
