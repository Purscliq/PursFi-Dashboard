"use client";
import { useEffect } from "react";
import { useTransactionsMutation } from "@/services/transactionService";
import { useAppSelector } from "@/store/hooks";

const DashboardTable = () => {
  const [fetchTransactions, { isLoading }] = useTransactionsMutation();
  const profile = useAppSelector((store) => store.user.user);
  useEffect(() => {
    fetchTransactions({
      userId: profile?.id,
      businessId: profile?.businessId,
    });
  }, []);
  return (
    <div className="flex flex-col space-y-3">
      <span className="flex items-center justify-between py-3">
        <p className="font-medium">Recent Transaction</p>{" "}
        <p className="text-gray-600 text-sm underline">See all</p>
      </span>
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <span className="flex space-x-3 items-center">
            <p className=" rounded-full p-2 font-medium  bg-[#CDA4FF52]">JD</p>
            <p>John Doe</p>
          </span>
          <p className="font-medium text-lg">N90,000</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
