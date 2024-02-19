"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Done from "@/assets/icon/Done";
import { message } from "antd";
import { CustomButton as Button } from "@/lib/AntdComponents";
import { useSearchParams } from "next/navigation";
import { useLazyGetSingleTransactionQuery } from "@/services/transactionService";

const TransactionReceipt = () => {
  const params = useSearchParams();
  const [fetchTransaction, { isLoading, data, isUninitialized }] =
    useLazyGetSingleTransactionQuery();
  useEffect(() => {
    if (params.get("reference")) {
      fetchTransaction(params.get("reference"))
        .unwrap()
        .catch((err) => {
          message.error(
            JSON.parse(err?.data?.responseDescription)?.message ||
              "something went wrong"
          );
        });
    }
  }, [params]);
  return (
    <>
      {isLoading || isUninitialized ? (
        <div className="relative h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="fixed top-0 left-0 px-6 py-4">
            <Image src={logo} alt="logo" className="w-28 h-28" />
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-50" />
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin z-50" />
        </div>
      ) : (
        <>
          <div className="min-h-screen flex flex-col bg-BgImage mx-auto max-w-[1640px] bg-[#FAFAFA] relative">
            <nav className="py-4 px-8 bg-white flex justify-between items-center sticky top-0">
              <Image src={logo} alt="logo" />
              <a
                className="px-[10px] py-[5px] border border-[#000000] border-solid rounded-[8px]"
                href="https://pursfinance.com"
                target="_blank"
              >
                learn about us
              </a>
            </nav>
            <main className=" flex flex-col items-center justify-center bg-white w-[90%] md:w-[60%] m-auto my-[2rem] py-6 px-[10%] rounded-[20px]">
              <Done className="translate-y-[-20%]" />
              <span className="border-b border-[#E9EBEB] pt-[1.5rem]">
                <h1 className="text-[25px] font-[700] text-[#0AB71B]">
                  Payment successful !
                </h1>
                <p className="text-[19px] font-[500] text-[#515B6F]">
                  Your payment has been successfully done
                </p>
              </span>
              <div className="flex flex-col gap-[1rem]">
                <span>
                  <h3 className="text-[#515B6F] text-[16px] font-[400]">
                    Total Payment
                  </h3>
                  <h2 className="text-[25px] font-[700] text-[#000000]">
                    NGN 5,000,000
                  </h2>
                </span>
                <span className="grid grid-cols-2 justify-between items-center">
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[1rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      Ref Number
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400]">
                      004567484738
                    </p>
                  </span>
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[1rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      Payment Time
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400]">
                      25 Feb 2023, 13:32
                    </p>
                  </span>
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[1rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      Payment Method
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400]">
                      Bank Transfer
                    </p>
                  </span>
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[1rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      Sender Name
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400]">
                      John Doe
                    </p>
                  </span>
                </span>
              </div>
            </main>
            <footer className="py-4 px-8 bg-white flex justify-end items-center gap-1 sticky bottom-0">
              <Button onClick={() => window.print()}>Download Receipt</Button>
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default TransactionReceipt;
