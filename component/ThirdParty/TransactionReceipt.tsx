"use client";
import { useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Done from "@/assets/icon/Done";
import { message } from "antd";
import { CustomButton as Button } from "@/lib/AntdComponents";
import { useSearchParams } from "next/navigation";
import { useLazyGetSingleTransactionQuery } from "@/services/transactionService";
import { useLazyGetBillPaymentTransactionDetailsQuery } from "@/services/bill-payment";

const TransactionReceipt = () => {
  const params = useSearchParams();
  const [fetchTransaction, { isLoading, data, isUninitialized }] =
    useLazyGetSingleTransactionQuery();
  const [
    fetchBillPaymentTransaction,
    {
      data: bill,
      isLoading: isLoadingBill,
      isUninitialized: billUninitialized,
    },
  ] = useLazyGetBillPaymentTransactionDetailsQuery();
  useEffect(() => {
    if (params.get("bill")) {
      fetchBillPaymentTransaction({ id: params.get("bill") })
        .unwrap()
        .catch((err) => {
          message.error(
            JSON.parse(err?.data?.responseDescription)?.message ||
              "something went wrong"
          );
        });
    } else if (params.get("reference")) {
      fetchTransaction(params.get("reference"))
        .unwrap()
        .catch((err) => {
          message.error(
            JSON.parse(err?.data?.responseDescription)?.message ||
              "something went wrong"
          );
        });
    }
  }, [params.get("reference"), params.get("bill")]);
  return (
    <>
      {(isLoading || isUninitialized) &&
      (isLoadingBill || billUninitialized) ? (
        <div className="relative h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="fixed top-0 left-0 px-6 py-4">
            <Image src={logo} alt="logo" className="w-28 h-28" />
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-50" />
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin z-50" />
        </div>
      ) : (
        <>
          <div className="min-h-screen flex flex-col justify-between bg-BgImage mx-auto max-w-[1640px] bg-[#FAFAFA] relative">
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
            <main className="flex flex-col items-center justify-center bg-white max-w-[600px] w-[90%] md:w-[40%] m-auto my-[2rem] py-4 px-[2%] rounded-[20px]">
              <Done className="translate-y-[-50%]" />
              <span className="border-b border-[#E9EBEB] pt-[1.5rem]">
                <h1 className="text-[25px] font-[700] text-[#0AB71B] text-center">
                  Payment successful !
                </h1>
                <p className="text-[19px] font-[500] text-[#515B6F]">
                  Your payment has been successfully done
                </p>
              </span>
              <div className="flex flex-col items-center justify-center gap-[1rem]">
                <span>
                  <h3 className="text-[#515B6F] text-[16px] font-[400] text-center">
                    Total Payment
                  </h3>
                  <h2 className="text-[25px] font-[700] text-[#000000] text-center">
                    NGN{" "}
                    {params.get("bill")
                      ? Number(bill?.data[0]?.amount || 0).toLocaleString(
                          "en-US"
                        )
                      : Number(data?.data?.amount || 0).toLocaleString("en-US")}
                  </h2>
                </span>
                <span className="grid grid-cols-2 gap-[0.5rem] justify-between items-stretch">
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[0.5rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      Ref Number
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400] break-words">
                      {params.get("bill")
                        ? bill?.data[0]?.reference
                        : data?.data?.reference}
                    </p>
                  </span>
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[0.5rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      Payment Time
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400]">
                      {params.get("bill")
                        ? `${new Date(
                            bill?.data[0]?.createdAt
                          ).getDate()} ${new Intl.DateTimeFormat("en", {
                            month: "short",
                          }).format(
                            new Date(bill?.data[0]?.createdAt)
                          )} ${new Date(
                            bill?.data[0]?.createdAt
                          ).getFullYear()}, ${new Date(
                            bill?.data[0]?.createdAt
                          ).getHours()}:${new Date(bill?.data[0]?.createdAt)
                            .getMinutes()
                            .toString()
                            .padStart(2, "0")}`
                        : `${new Date(
                            data?.data?.createdAt
                          ).getDate()} ${new Intl.DateTimeFormat("en", {
                            month: "short",
                          }).format(
                            new Date(data?.data?.createdAt)
                          )} ${new Date(
                            data?.data?.createdAt
                          ).getFullYear()}, ${new Date(
                            data?.data?.createdAt
                          ).getHours()}:${new Date(data?.data?.createdAt)
                            .getMinutes()
                            .toString()
                            .padStart(2, "0")}`}
                    </p>
                  </span>
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[0.5rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      Payment Method
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400]">
                      {params.get("bill")
                        ? bill?.data[0]?.type === "sell"
                          ? `${bill?.data[0]?.model?.product} Purchase`
                          : `${bill?.data[0]?.model?.product} Wallet Funding`
                        : data?.data?.type === "banktransfer"
                        ? "Bank Transfer"
                        : "Bank Transfer"}
                    </p>
                  </span>
                  <span className="rounded-[8px] border border-[#E9EBEB] p-[0.5rem] flex flex-col">
                    <h6 className="text-[#515B6F] text-[16px] font-[400]">
                      {params.get("bill")
                        ? `${bill?.data[0]?.model?.product} Wallet`
                        : data?.data?.transactionType === "credit"
                        ? "Sender Name"
                        : "Recipient Name"}
                    </h6>
                    <p className="text-[#000000] text-[16px] font-[400] break-words">
                      {params.get("bill")
                        ? bill?.data[0]?.model?.phone ||
                          `${bill?.data[0]?.model?.product}Wallet`
                        : data?.data?.accountName}
                    </p>
                  </span>
                </span>
              </div>
            </main>
            <footer
              className={`py-4 px-8 bg-white flex justify-end items-center gap-1 sticky bottom-0`}
            >
              <Button
                className="no-print"
                onClick={() => {
                  window.print();
                }}
              >
                Download Receipt
              </Button>
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default TransactionReceipt;
