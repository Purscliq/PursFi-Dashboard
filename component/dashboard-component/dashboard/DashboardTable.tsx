/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { useTransactionsMutation } from "@/services/transactionService";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import DashboardModal from "./DashboardModal";

const DashboardTable = () => {
  const [fetchTransactions, { isLoading, data }] = useTransactionsMutation();
  const profile = useAppSelector((store) => store?.user?.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTransactions({
      userId: profile?.id,
      businessId: profile?.businessId,
      page: 1,
      perPage: 5,
    });
  }, []);

  return (
    <div className="flex flex-col space-y-3 bg-white shadow p-2">
      <span className="flex items-center justify-between py-3">
        <p className="font-medium">Recent Transaction</p>{" "}
        <Link
          href="/transactions"
          className="text-gray-600 text-sm underline cursor-pointer"
        >
          See all
        </Link>
      </span>
      <>
        {data?.data?.data?.length > 0 ? (
          <>
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
                  N{Number(e?.amount || 0).toLocaleString("en-US")}
                </p>
              </div>
            ))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2 p-3">
            <h2 className="text-xl font-semibold">
              Hi{" "}
              {profile?.firstName &&
                profile.firstName.charAt(0).toUpperCase() +
                  profile.firstName.slice(1)}
            </h2>{" "}
            <p className="text-sm text-gray-500 text-center max-w-xs">
              There isn't a transaction for pursbusiness yet. Click here to Add
              fund
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-md btn-transparent hover:btn-transparent text-black text-sm normal-case"
            >
              + Add Fund
            </button>
          </div>
        )}
      </>
      <DashboardModal open={isModalOpen} setOpen={setIsModalOpen} />
    </div>
  );
};

export default DashboardTable;
