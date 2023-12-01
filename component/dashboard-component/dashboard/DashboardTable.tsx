"use client";
import { useEffect } from "react";
import { useTransactionsMutation } from "@/services/transactionService";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

const DashboardTable = () => {
  const [fetchTransactions, { isLoading, data }] = useTransactionsMutation();
  const profile = useAppSelector((store) => store.user.user);
  useEffect(() => {
    fetchTransactions({
      userId: profile?.id,
      businessId: profile?.businessId,
      page: 1,
      perPage: 5,
    });
  }, []);
  return (
    <div className="flex flex-col space-y-3">
      <span className="flex items-center justify-between py-3">
        <p className="font-medium">Recent Transaction</p>{" "}
        <Link
          href="/transactions"
          className="text-gray-600 text-sm underline cursor-pointer"
        >
          See all
        </Link>
      </span>
      <div className="flex flex-col space-y-3">
        {data?.data?.data?.map((e: Record<string, any>, i: React.Key) => (
          <div key={i} className="flex items-center justify-between">
            <span className="flex space-x-3 items-center">
              {e?.transactionType === "debit" ? (
                <p className=" rounded-full p-2 font-medium  bg-[#FF39561A]/[10%] text-[#FF3956]">
                  DR
                </p>
              ) : (
                <p className=" rounded-full p-2 font-medium  bg-[#0AA07B]/[10%] text-[#0AA07B]">
                  CR
                </p>
              )}

              <p>{e?.accountName}</p>
            </span>
            <p className="font-medium text-lg">
              N{Number(e?.amount).toLocaleString("en-US")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTable;
